import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "src/styles/globals.css";
import { theme } from "src/styles/theme";

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
    <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
