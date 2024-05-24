import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableContainer,
} from "@mui/material";

import { DiseasesTableRow } from "../DiseasesTableRow";
import { TableHeaderCell } from "./styles";
import { SymptomsSearch } from "../SymptomsSearch";

export const DiseasesTable: React.FC = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell colSpan={3}>
            <SymptomsSearch />
          </TableHeaderCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell sx={{ width: "12rem" }} align="center">
            Correspondência
          </TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell sx={{ width: "5rem" }}></TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <DiseasesTableRow />
        <DiseasesTableRow />
      </TableBody>
    </Table>
  </TableContainer>
);
