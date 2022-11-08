import { Grid } from "@mui/material";
import React from "react";

const Continer = (props) => {
  return (
    <Grid
      xs={12}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      container
    >
      <Grid xs={9} container item>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default Continer;
