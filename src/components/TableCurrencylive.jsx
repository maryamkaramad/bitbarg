import React from "react";
import { Grid } from "@mui/material";

import OneCurrency from "./OneCurrency";
const TableCurrencylive = ({ infoCurrencys, unit, setInfoCurrencys }) => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      alignContent={"flex-start"}
      width={"100%"}
      gap={3}
    >
      {infoCurrencys.map((infoCurrency, index) => (
        <OneCurrency
          index={index}
          infoCurrency={infoCurrency}
          unit={unit}
          infoCurrencys={infoCurrencys}
          setInfoCurrencys={setInfoCurrencys}
        />
      ))}
    </Grid>
  );
};

export default TableCurrencylive;
