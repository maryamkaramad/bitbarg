import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OneCurrency = ({
  infoCurrency,
  index,
  unit,
  infoCurrencys,
  setInfoCurrencys,
}) => {
  const handlefavorite = (symbol) => {
    setInfoCurrencys(
      infoCurrencys.map((infoCurrency) =>
        infoCurrency.symbol === symbol
          ? { ...infoCurrency, favorite: !infoCurrency.favorite }
          : infoCurrency
      )
    );
  };
  return (
    <Grid
      key={index}
      sx={10}
      container
      item
      justifyContent={"space-between"}
      alignItems={"center"}
      my={3}
    >
      <Grid item sx={1}>
        <Button item onClick={() => handlefavorite(infoCurrency.symbol)}>
          {infoCurrency.favorite ? (
            <StarBorderIcon sx={{ color: "red" }} />
          ) : (
            <StarBorderIcon sx={{ color: "blue" }} />
          )}
        </Button>
      </Grid>

      <Grid item sx={1}>
        <Typography>{infoCurrency.change}</Typography>
      </Grid>
      <Grid item sx={1}>
        <Typography>
          {infoCurrency.sparkline[0]}
          {unit}
        </Typography>
      </Grid>
      <Grid item sx={1}>
        <Typography>
          {infoCurrency.price}
          {unit}
        </Typography>
      </Grid>

      <Grid item sx={1} dis>
        <Typography> {infoCurrency.name}</Typography>
        <Typography> {infoCurrency.symbol}</Typography>
      </Grid>
      <Grid item sx={1}>
        <Avatar src={infoCurrency.iconUrl} />
      </Grid>
    </Grid>
  );
};

export default OneCurrency;
