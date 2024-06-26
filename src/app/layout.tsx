import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
