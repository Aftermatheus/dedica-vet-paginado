"use client";

import { styled } from "@mui/material";

export const Container = styled("main")`
  background-color: ${({ theme }) => theme.palette.background.default};
  min-height: 100vh;
  min-width: 100vw;
`;
