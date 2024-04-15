"use client";

import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.background};
`;

export const ImageBlur = styled("div")`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};

  backdrop-filter: blur(1000px);
  mask: linear-gradient(
      90deg,
      #000,
      rgba(0, 0, 0, 0)
        calc((100% - ${({ theme }) => theme.breakpoints.values.xl}px) / 2),
      rgba(0, 0, 0, 0)
        calc(
          100% - ((100% - ${({ theme }) => theme.breakpoints.values.xl}px) / 2)
        ),
      #000
    ),
    linear-gradient(0deg, #000, rgba(0, 0, 0, 0));
`;
