import React from "react";
import { FormControl, Grid } from "@mui/material";
import { TextField } from "@mui/material";

const InputSearch = ({ handlesearch }) => {
  return (
    <Grid item container>
      <FormControl item fullWidth type={"submit"}>
        <TextField
          fullWidth
          item
          type={"search"}
          placeholder={"جست و جو "}
          onChange={handlesearch}
          name="search"
        />
      </FormControl>
    </Grid>
  );
};

export default InputSearch;
