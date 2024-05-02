"use client";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import MuiContainer from "@mui/material/Container";
import Tab, { tabClasses } from "@mui/material/Tab";

export const MainBox = styled(Box)`
  z-index: ${({ theme }) => theme.zIndex.appBar};
  border-bottom: 2px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.background.dark};
`;

export const Container = styled(MuiContainer)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
