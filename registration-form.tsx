"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "sending" | "success" | "error";

export function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setMessage("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/registrations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "No pudimos completar el registro.");
      setStatus("success");
      setMessage("¡Registro completado! Ya formas parte del curso de inducción del Sistema ADN.");
      form.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Ocurrió un error. Intenta nuevamente.");
    }
  }

  return (
    <form className="registration-form" onSubmit={submit}>
      <div className="field full-field"><Label htmlFor="name">Nombre completo</Label><Input id="name" name="name" autoComplete="name" placeholder="Escribe tu nombre y apellido" minLength={3} maxLength={120} required /></div>
      <div className="field"><Label htmlFor="cedula">Cédula</Label><Input id="cedula" name="cedula" placeholder="Ejemplo: 8-123-456" minLength={4} maxLength={30} required /></div>
      <div className="field"><Label htmlFor="phone">Teléfono</Label><Input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Ejemplo: 6000-0000" minLength={7} maxLength={25} required /></div>
      <div className="field full-field"><Label htmlFor="email">Correo electrónico</Label><Input id="email" name="email" type="email" autoComplete="email" placeholder="nombre@correo.com" maxLength={160} required /></div>
      <label className="consent full-field"><input type="checkbox" name="consent" value="yes" required /><span>Acepto que mis datos sean utilizados únicamente para gestionar mi participación y comunicación relacionada con este curso.</span></label>
      <div className="submit-row full-field"><p>Revisa tus datos antes de continuar.</p><Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Registrando…" : "Completar registro"}</Button></div>
      {message && <div className={`form-notice ${status}`} role="status">{message}</div>}
    </form>
  );
}
