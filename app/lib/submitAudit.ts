import { AuditFormData } from "../psychology-system/types";

export async function submitAudit(data: AuditFormData): Promise<void> {
  const response = await fetch("/api/audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);
    throw new Error(result?.error || "Solicitarea nu a putut fi trimisă.");
  }
}
