import { NextResponse } from "next/server";

const requiredFields = [
  "fullName",
  "email",
  "phone",
  "clinicOrName",
  "city",
] as const;

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Integrarea cu Google Sheets nu este configurată încă." },
      { status: 503 },
    );
  }

  try {
    const data = await request.json();

    if (
      !data ||
      requiredFields.some(
        (field) => typeof data[field] !== "string" || !data[field].trim(),
      )
    ) {
      return NextResponse.json(
        { error: "Completează toate câmpurile obligatorii." },
        { status: 400 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Google Sheets nu a acceptat solicitarea." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "A apărut o eroare la trimiterea formularului." },
      { status: 500 },
    );
  }
}
