import { env } from "cloudflare:workers";

function clean(value: unknown, max: number) { return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, max) : ""; }

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name, 120); const cedula = clean(body.cedula, 30);
    const phone = clean(body.phone, 25); const email = clean(body.email, 160).toLowerCase();
    const consent = body.consent === "yes";
    if (name.length < 3 || cedula.length < 4 || phone.length < 7 || !/^\S+@\S+\.\S+$/.test(email) || !consent) {
      return Response.json({ error: "Completa correctamente todos los campos y acepta el uso de datos." }, { status: 400 });
    }
    await env.DB.prepare(`INSERT INTO student_registrations (full_name, cedula, phone, email, consent_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)`).bind(name, cedula, phone, email).run();
    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.includes("UNIQUE constraint failed")) return Response.json({ error: "Ya existe un registro con esta cédula o correo electrónico." }, { status: 409 });
    return Response.json({ error: "No pudimos guardar tu registro. Intenta nuevamente." }, { status: 500 });
  }
}
