"use client";
import { useCallback, useMemo, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import { DiseasesTableRow } from "../DiseasesTableRow";
import { TableHeaderCell } from "./styles";
import { SymptomsSearch } from "../SymptomsSearch";
import { ClinicalSigns } from "src/types/ClinicalSigns";
import { Diseases } from "src/constants/diseases";
import { TablePaginationActions } from "./TablePaginationActions";

type DiseasesMatch = Array<{
  name: string;
  match: number;
  clinical_signs: ClinicalSigns[];
}>;

export const DiseasesTable: React.FC = () => {
  const [signsSearch, setSignsSearch] = useState<ClinicalSigns[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const diseasesMatch = useMemo<DiseasesMatch>(() => {
    const newDiseasesMatch = Diseases.reduce<DiseasesMatch>(
      (accDiseasesMatch, disease) => {
        const matchingPoints = signsSearch.reduce((accMatchingPoints, sign) => {
          const signalPoints =
            disease.clinical_signs[sign] ?? disease.extra_signals_effect;
          return accMatchingPoints + signalPoints;
        }, 0);

        if (matchingPoints <= 0) return accDiseasesMatch;

        const totalPoints = Object.values(disease.clinical_signs).reduce(
          (accSum, points) => accSum + points,
          0
        );

        return [
          ...accDiseasesMatch,
          {
            name: disease.name,
            match: matchingPoints / totalPoints,
            clinical_signs: Object.keys(
              disease.clinical_signs
            ) as ClinicalSigns[],
          },
        ];
      },
      []
    );

    return newDiseasesMatch.sort((a, b) => b.match - a.match);
  }, [signsSearch]);

  const diseasesMatchPage = useMemo<DiseasesMatch>(
    () => diseasesMatch.slice(currentPage * 10, (currentPage + 1) * 10),
    [diseasesMatch, currentPage]
  );

  const handleOnChangeSearch = useCallback((signs: ClinicalSigns[]) => {
    setSignsSearch(signs);
  }, []);

  console.log(currentPage);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell colSpan={3}>
              <SymptomsSearch onChange={handleOnChangeSearch} />
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
          {diseasesMatchPage.map((disease) => (
            <DiseasesTableRow
              key={disease.name}
              signsSearch={signsSearch}
              {...disease}
            />
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={diseasesMatch.length}
              rowsPerPage={10}
              page={currentPage}
              onPageChange={(_, newPage) => setCurrentPage(newPage)}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
