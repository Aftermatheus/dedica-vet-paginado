"use client";

import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const symptoms = [
  { title: "Vômito" },
  { title: "Diarréia" },
  { title: "Febre" },
  { title: "Cialorréia" },
  { title: "Ataxia" },
  { title: "Mioclonia" },
  { title: "Conjuntivite" },
  { title: "Hiperqueratose dos coxins" },
  { title: "Hiperqueratose do focinho" },
  { title: "Pústulas abdominais" },
  { title: "Secreção nasal" },
  { title: "Secreção ocular" },
  { title: "Tosse produtiva" },
  { title: "Tosse seca" },
  { title: "Dispnéia" },
  { title: "Anorexia" },
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const SymptomsSearch = () => (
  <Autocomplete
    multiple
    options={symptoms.sort((a, b) => a.title[0].localeCompare(b.title[0]))}
    groupBy={(option) => option.title[0].toUpperCase()}
    getOptionLabel={(option) => option.title}
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
        {option.title}
      </li>
    )}
  />
);
