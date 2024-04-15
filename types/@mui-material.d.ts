import { Palette, ZIndex } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeBackground {
    dark: Palette["background"]["default"];
    light: Palette["background"]["default"];
  }

  interface ZIndex {
    default: number;
    background: number;
  }
}
