import { convertToModelMessages, isStepCount, streamText, tool, type UIMessage } from "ai";
import { z } from "zod";
import { assistantInstructions } from "@/lib/ai/assistant";
import { allowChatRequest, chatClientKey } from "@/lib/ai/rate-limit";
import { captureLead } from "@/lib/leads/capture";
import { isLeadInterest } from "@/lib/leads/interests";

export const maxDuration = 30;

const DEFAULT_MODEL = "google/gemini-3-flash";

const leadInput = z.object({
  name: z.string().describe("The visitor's name"),
  phone: z.string().describe("The visitor's phone number"),
  email: z.string().describe("The visitor's email address"),
  interest: z
    .enum(["buyer", "seller", "investor", "agent", "podcast-guest"])
    .describe("Why they reached out"),
});

const saveLead = tool({
  description: "Send a visitor's name, phone, email, and interest to Natalie. Call only when all four are known.",
  inputSchema: leadInput,
  execute: async ({ name, phone, email, interest }) => {
    if (!isLeadInterest(interest)) {
      return { ok: false as const, message: "Ask whether they are a buyer, seller, investor, agent, or podcast guest." };
    }
    const result = await captureLead({
      name,
      email,
      phone,
      interest,
      resource: "chat-assistant",
    });
    if (!result.ok) {
      return { ok: false as const, message: result.message };
    }
    return { ok: true as const, message: "Lead sent." };
  },
});

const tools = { saveLead };

function sanitizeMessages(input: unknown): UIMessage[] | null {
  if (!Array.isArray(input) || input.length === 0 || input.length > 24) return null;

  const cleaned: UIMessage[] = [];
  for (const message of input.slice(-16)) {
    if (!message || typeof message !== "object") return null;
    const role = (message as { role?: unknown }).role;
    if (role !== "user" && role !== "assistant") return null;
    const parts = (message as { parts?: unknown }).parts;
    if (!Array.isArray(parts)) return null;

    const textParts: UIMessage["parts"] = [];
    for (const part of parts) {
      if (!part || typeof part !== "object") continue;
      if ((part as { type?: unknown }).type !== "text") continue;
      const text = (part as { text?: unknown }).text;
      if (typeof text !== "string") continue;
      const clipped = text.slice(0, 800).trim();
      if (clipped) textParts.push({ type: "text", text: clipped });
    }

    if (textParts.length === 0) {
      if (role === "user") return null;
      continue;
    }

    const idValue = (message as { id?: unknown }).id;
    cleaned.push({
      id: typeof idValue === "string" && idValue ? idValue.slice(0, 80) : `m-${cleaned.length}`,
      role,
      parts: textParts,
    });
  }

  const last = cleaned.at(-1);
  if (!last || last.role !== "user") return null;
  return cleaned;
}

export async function POST(request: Request) {
  if (!allowChatRequest(chatClientKey(request))) {
    return Response.json(
      { error: "Too many messages. Please wait a few minutes, or call or text (832) 863-3468." },
      { status: 429 },
    );
  }

  const raw = await request.text();
  if (raw.length > 40_000) {
    return Response.json({ error: "That message is too long." }, { status: 413 });
  }

  let payload: { messages?: unknown };
  try {
    payload = JSON.parse(raw) as { messages?: unknown };
  } catch {
    return Response.json({ error: "Please send a message." }, { status: 400 });
  }

  const messages = sanitizeMessages(payload.messages);
  if (!messages) {
    return Response.json({ error: "Please send a message." }, { status: 400 });
  }

  const hasGatewayAuth = Boolean(process.env.AI_GATEWAY_API_KEY?.trim() || process.env.VERCEL_OIDC_TOKEN?.trim());
  if (!hasGatewayAuth) {
    return Response.json(
      { error: "Chat answers are not turned on yet. Call or text (832) 863-3468, or book a time." },
      { status: 503 },
    );
  }

  const model = process.env.AI_GATEWAY_MODEL?.trim() || DEFAULT_MODEL;

  try {
    const result = streamText({
      model,
      system: assistantInstructions(),
      messages: await convertToModelMessages(messages, { tools, ignoreIncompleteToolCalls: true }),
      tools,
      stopWhen: isStepCount(4),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("[chat] request failed", error instanceof Error ? error.message : "unknown");
    return Response.json(
      { error: "Chat is unavailable right now. Call or text (832) 863-3468, or book a time." },
      { status: 503 },
    );
  }
}
