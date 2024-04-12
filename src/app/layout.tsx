import type { Metadata } from "next";
import "src/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dedica, Vet",
  description:
    "Guia de doenças e Ferramenta Auxiliar de Diagnóstico Veterinário",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="pt-BR">
    <body>{children}</body>
  </html>
);

export default RootLayout;
