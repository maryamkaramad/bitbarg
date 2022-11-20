import React from "react";
import { Grid } from "@mui/material";

import OneCurrency from "./OneCurrency";
const TableCurrencylive = ({
  infoCurrencys,
  unit,
  setInfoCurrencys,
  selected,
  search,
}) => {
  return (
    <Grid item container xs={12}>
      {infoCurrencys
        .filter((infoCurrency) => infoCurrency.favorite === true || !selected)
        .filter((infoCurrency) =>
          infoCurrency.symbol.toLowerCase().includes(search.toLowerCase())
        )
        .map((infoCurrency, index) => (
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
