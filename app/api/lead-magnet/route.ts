import { NextResponse } from "next/server";
import { captureLead } from "@/lib/leads/capture";

type LeadMagnetPayload = {
  name?: unknown;
  email?: unknown;
  resource?: unknown;
  phone?: unknown;
  interest?: unknown;
  honeypot?: unknown;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadMagnetPayload | null;

  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || typeof body.resource !== "string") {
    return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
  }

  const result = await captureLead({
    name: body.name,
    email: body.email,
    resource: body.resource,
    phone: typeof body.phone === "string" ? body.phone : undefined,
    interest: typeof body.interest === "string" ? body.interest : undefined,
    honeypot: typeof body.honeypot === "string" ? body.honeypot : "",
  });

  if (!result.ok) {
    return NextResponse.json({ success: false, message: result.message }, { status: result.status });
  }

  return NextResponse.json({ success: true });
}
