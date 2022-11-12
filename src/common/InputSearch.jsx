import React from "react";
import { FormControl, Grid } from "@mui/material";
import { TextField } from "@mui/material";

const InputSearch = ({ setSearch, search }) => {
  return (
    <Grid item container>
      <FormControl item fullWidth type={"submit"}>
        <TextField
          fullWidth
          item
          type={"search"}
          placeholder={"جست و جو "}
          onChange={(event) => setSearch(event.target.value)}
          name={search}
          value={search}
        />
      </FormControl>
    </Grid>
  );
};

export default InputSearch;
