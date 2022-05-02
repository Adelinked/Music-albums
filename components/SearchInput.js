import React, { useEffect, useState } from "react";

import { Autocomplete, TextField } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";

import { useAppContext } from "../context";

export default function SearchInput(props) {
  const { globalState } = useAppContext();
  const artist = globalState;

  return (
    <>
      <Autocomplete
        onChange={props.handleChange}
        value={artist}
        disablePortal
        id="combo-box-demo"
        options={artists}
        sx={{ width: 300 }}
        disabled={props.disabled}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Artist" type="search" />
        )}
      />
    </>
  );
}

const init_artists = [
  { name: "Michael Jackson" },
  { name: "Celine Dion" },
  { name: "Cher" },
  { name: "Mariah Carey" },
];

const filter = createFilterOptions();

export function FreeSoloCreateOption(props) {
  const { globalState } = useAppContext();

  const [value, setValue] = React.useState({ name: globalState });
  const [artists, setArtists] = useState(init_artists);

  useEffect(() => {
    const newArtists =
      artists.filter((a) => a.name === globalState).length > 0
        ? artists
        : [{ name: globalState }, ...artists];

    setArtists(newArtists);
  }, [globalState]);

  useEffect(() => {
    if (!value) return;
    props.handleChange(value.name);
  }, [value]);

  return (
    <Autocomplete
      disabled={props.disabled}
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            name: `${inputValue}`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={artists}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          //props.handleChange(option);
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option

        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => <TextField {...params} label="Artist" />}
    />
  );
}
