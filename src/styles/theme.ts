"use client";

import { createTheme } from "@mui/material";

/*
 * Crie temas usando os utilitários:
 * - https://m2.material.io/inline-tools/color/
 * - https://zenoo.github.io/mui-theme-creator/
 */
export const theme = createTheme({
  zIndex: { default: 0, background: -1000 },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: "1rem 3rem",
          fontSize: "1.2rem",
        },
        sizeMedium: {
          padding: "1rem 2rem",
        },
        sizeSmall: {
          padding: "0.5rem 1rem",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    background: {
      dark: "#0c0c0c",
      default: "#121212",
      light: "#414141",
    },
    primary: {
      main: "#b4c158",
      light: "#dae0aa",
      "50": "#f6f8ea",
      "100": "#e9eccb",
      "200": "#dae0aa",
      "300": "#cbd389",
      "400": "#bfca70",
      "500": "#b4c158",
      "600": "#a3b14f",
      "700": "#8e9e45",
      "800": "#798a3d",
      "900": "#57682e",
      dark: "#8e9e45",
      contrastText: "#000",
    },
    secondary: {
      main: "#fae759",
      light: "#fffeea",
      "50": "#fffeea",
      "100": "#fffacb",
      "200": "#fff5a9",
      "300": "#fef188",
      "400": "#fcec6f",
      "500": "#fae759",
      "600": "#ffde5c",
      "700": "#fdc855",
      "800": "#f8b14d",
      "900": "#f08c40",
      dark: "#f08c40",
      contrastText: "#000",
    },
  },
});
