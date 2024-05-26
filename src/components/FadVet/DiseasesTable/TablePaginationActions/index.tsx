"use client";
import { useCallback } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

export const TablePaginationActions: React.FC<TablePaginationActionsProps> = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
}) => {
  const handleFirstPageButtonClick = useCallback((event: MouseEvent) => {
    onPageChange(event, 0);
  }, []);

  const handleBackButtonClick = useCallback((event: MouseEvent) => {
    onPageChange(event, page - 1);
  }, []);

  const handleNextButtonClick = useCallback((event: MouseEvent) => {
    onPageChange(event, page + 1);
  }, []);

  const handleLastPageButtonClick = useCallback((event: MouseEvent) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }, []);

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};
