"use client";

import { Box, styled, Tab, tabClasses } from "@mui/material";

export const Container = styled(Box)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid ${({ theme }) => theme.palette.divider};
  padding-inline: 5rem;
  background-color: ${({ theme }) => theme.palette.background.dark};
`;

export const TabItem = styled(Tab)<{ href: string }>`
  width: max-content;
  min-width: 8rem;
  max-width: 12rem;
  height: 100px;

  transition: color
    ${({ theme }) => theme.transitions.duration.enteringScreen}ms;

  &:hover:not(.${tabClasses.selected}) {
    transition: color
      ${({ theme }) => theme.transitions.duration.leavingScreen}ms;
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;
