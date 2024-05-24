"use client";

import { useState } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Box,
  Chip,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { MainTableRow } from "./styles";

export const DiseasesTableRow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MainTableRow>
        <TableCell align="center">0</TableCell>
        <TableCell>Covid</TableCell>
        <TableCell align="center">
          <IconButton
            size="small"
            onClick={() => setIsOpen((oldState) => !oldState)}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </MainTableRow>
      <TableRow>
        <TableCell colSpan={3} padding="none">
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box
              padding={3}
              pt={0}
              display="flex"
              flexWrap={"wrap"}
              rowGap={2}
              columnGap={1}
            >
              <Chip label={"Vômito"} color="primary" />
              <Chip label={"Vômito"} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
