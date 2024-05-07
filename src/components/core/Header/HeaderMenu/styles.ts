"use client";

import styled from "@mui/material/styles/styled";
import Tab, { tabClasses } from "@mui/material/Tab";

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
