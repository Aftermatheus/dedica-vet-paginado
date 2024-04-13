"use client";

import { Box, styled, Tab } from "@mui/material";

export const Container = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.default};
  height: 100px;

  padding-inline: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabItem = styled(Tab)<{ href: string }>`
  width: max-content;
  min-width: 8rem;
  max-width: 12rem;
  height: 100px;
`;
