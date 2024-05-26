"use client";

import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { ClinicalSigns } from "src/types/ClinicalSigns";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface SymptomsSearchProps {
  onChange: (value: ClinicalSigns[]) => void;
}

export const SymptomsSearch: React.FC<SymptomsSearchProps> = ({ onChange }) => (
  <Autocomplete
    multiple
    onChange={(_, value) => onChange(value)}
    options={Object.values(ClinicalSigns).sort((a, b) =>
      a[0].localeCompare(b[0])
    )}
    groupBy={(option) => option[0].toUpperCase()}
    getOptionLabel={(option) => option}
    renderInput={({ inputProps, ...params }) => (
      <TextField
        variant="standard"
        label="Sinais, achados laboratoriais, achados clínicos..."
        inputProps={{
          sx: { minHeight: "3rem" },
          ...inputProps,
        }}
        {...params}
      />
    )}
    renderGroup={(params) => (
      <li>
        <Typography pl={2} marginBlock={1} variant="h6">
          {params.group}
        </Typography>
        <ul>{params.children}</ul>
      </li>
    )}
    renderOption={(props, option, { selected }) => (
      <li {...props}>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
        />
        {option}
      </li>
    )}
  />
);
