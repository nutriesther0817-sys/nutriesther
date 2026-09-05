import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso de Inducción Sistema ADN | NutriFit Esther",
  description: "Registro y formación para estudiantes del Sistema ADN de NutriFit Esther.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
