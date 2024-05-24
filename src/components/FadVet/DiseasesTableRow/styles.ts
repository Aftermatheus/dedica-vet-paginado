import styled from "@mui/material/styles/styled";
import TableRow from "@mui/material/TableRow";

export const MainTableRow = styled(TableRow)`
  & > *,
  & > td {
    border-bottom: 0;
  }

  &:nth-of-type(2n) {
    background-color: red;
  }
`;
