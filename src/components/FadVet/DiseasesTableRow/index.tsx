"use client";

import { useMemo, useState } from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TableRow from "@mui/material/TableRow";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { ClinicalSigns } from "src/types/ClinicalSigns";

import { MainTableRow } from "./styles";

interface DiseasesTableRowProps {
  name: string;
  match: number;
  signsSearch: ClinicalSigns[];
  clinical_signs: ClinicalSigns[];
}

export const DiseasesTableRow: React.FC<DiseasesTableRowProps> = ({
  name,
  match,
  signsSearch,
  clinical_signs,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrongSigns = useMemo(
    () => signsSearch.filter((sign) => !clinical_signs.includes(sign)),
    [signsSearch, clinical_signs]
  );

  return (
    <>
      <MainTableRow>
        <TableCell align="center">{(match * 100).toFixed(2)}%</TableCell>
        <TableCell>{name}</TableCell>
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
              {clinical_signs.map((sign) => (
                <Chip
                  key={sign}
                  label={sign}
                  color={signsSearch.includes(sign) ? "primary" : undefined}
                />
              ))}
              {wrongSigns.map((sign) => (
                <Chip key={sign} label={sign} color="warning" />
              ))}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
