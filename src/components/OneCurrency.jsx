import React from "react";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OneCurrency = ({ infoCurrency, index, unit, favorite }) => {
  return (
    <Grid
      key={index}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"end"}
      container
      width={"100%"}
    >
      <Grid item>
        <Button onClick={""}>
          {favorite}
          <StarBorderIcon />
        </Button>
      </Grid>
      <Grid item display={"flex"} width={90} justifyContent={"flex-end"}>
        <Typography>{infoCurrency.priceChangePercent}</Typography>
      </Grid>
      <Grid item>
        <Typography display={"flex"} width={200} justifyContent={"flex-end"}>
          {infoCurrency.bidPrice} {unit}
        </Typography>
      </Grid>
      <Grid item>
        <Typography display={"flex"} width={200} justifyContent={"flex-end"}>
          {infoCurrency.askPrice} {unit}
        </Typography>
      </Grid>
      <Grid item>
        <Typography> {infoCurrency.symbol}</Typography>
      </Grid>
    </Grid>
  );
};

export default OneCurrency;
