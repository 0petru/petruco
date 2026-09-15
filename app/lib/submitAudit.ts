import { AuditFormData } from "../psychology-system/types";

/**
 * Trimite un lead către `/api/audit`.
 *
 * `source` este obligatoriu intenționat: el ajunge în coloana „Sursă" din
 * Google Sheets și ne spune din ce pagină și din ce formular a venit lead-ul.
 * Fără el nu putem ști ce pagină convertește.
 */
export async function submitAudit(
  data: AuditFormData,
  source: string,
): Promise<void> {
  const response = await fetch("/api/audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, source }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);
    throw new Error(result?.error || "Solicitarea nu a putut fi trimisă.");
  }
}
