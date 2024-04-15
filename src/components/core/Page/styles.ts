"use client";

import { styled } from "@mui/material";

export const Container = styled("main")`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.background};
  background-color: ${({ theme }) => theme.palette.background.default};
  min-height: 100vh;
  min-width: 100vw;
`;
