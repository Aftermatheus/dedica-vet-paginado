"use client";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import MuiContainer from "@mui/material/Container";

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
