"use client";

import { Box, styled, Container as muiContainer } from "@mui/material";

export const Content = styled(Box)`
  position: relative;
  flex: 1;
  margin-inline: auto;
  width: min(100vw, 2000px);
  display: flex;
`;

export const Container = styled(muiContainer)`
  flex: 1;
  padding-bottom: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
