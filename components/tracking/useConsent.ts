"use client";

import { useCallback, useEffect, useState } from "react";
import { applyConsent, CONSENT_EVENT, readConsent, type ConsentChoice } from "@/lib/tracking/consent";

export function useConsent() {
  const [consent, setConsent] = useState<ConsentChoice | null | undefined>(undefined);
  const [saveFailed, setSaveFailed] = useState(false);

  useEffect(() => {
    function sync() {
      setConsent(readConsent());
    }

    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const choose = useCallback((choice: ConsentChoice) => {
    const result = applyConsent(choice);
    if (result === "failed") {
      setSaveFailed(true);
      return;
    }
    setSaveFailed(false);
    setConsent(choice);
    if (result === "reload") window.location.reload();
  }, []);

  return { consent, saveFailed, choose };
}
