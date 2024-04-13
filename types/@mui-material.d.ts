import { Palette, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeBackground {
    dark: Palette["background"]["default"];
    light: Palette["background"]["default"];
  }
}
