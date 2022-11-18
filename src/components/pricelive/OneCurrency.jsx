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
     
      container
      item
      my={3}
      gap={2}
      p={2}
      sx = {{ disply:"flex" ,flexDirection:{xs:"column-reverse" ,md:"row"},justifyContent:{xs:"center" ,md:"space-between"},alignItems:{xs:"center" ,md:"baseline"}}}
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
      <Grid item sx={1} textAlign={"left"} width={100}>
        <Typography textAlign={"left"}>
        {unit ==="تومان" ? ` ${infoCurrency.price} تومان `: `${infoCurrency.price/37000} تتر`}
        </Typography>
      </Grid>
      <Grid item sx={1} width={100} textAlign={"left"}>
        <Typography textAlign={"left"}>
        
          {unit ==="تومان" ? ` ${infoCurrency.price} تومان `: `${infoCurrency.price/37000} تتر`}
         
        </Typography>
      </Grid>

      <Grid item sx={1} display={"flex"} alignItems={"baseline"} >
        <Typography> {infoCurrency.symbol}</Typography>
        <Avatar width={50} src={infoCurrency.iconUrl} />
      </Grid>
    </Grid>
  );
};

export default OneCurrency;
