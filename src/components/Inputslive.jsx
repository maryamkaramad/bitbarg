import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import InputSearch from "./InputSearch";

const Inputslive = ({
  handlesearch,
  setInfoCurrencys,
  infoCurrencys,
  setUnit,
}) => {
  const [select, setSelect] = useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const handlesortmore = (infoCurrencys) => {
    console.log(infoCurrencys);
  };

  const handlesorlow = (infoCurrencys) => {};
  const handleTeter = () => {
    setInfoCurrencys(
      infoCurrencys.map((infoCurrency) => ({
        bidPrice: infoCurrency.bidPrice * 2,
        askPrice: infoCurrency.askPrice * 2,
        symbol: infoCurrency.symbol,
        priceChangePercent: infoCurrency.priceChangePercent,
      }))
    );
    setUnit("تتر");
  };
  const hadleback = () => {
    setInfoCurrencys(infoCurrencys);
    setUnit("تومان");
  };
  const handlestateFavoreie = (infoCurrencys) => {
    setInfoCurrencys(infoCurrencys.filter((item) => item.favorite === true));
  };
  return (
    <Grid
      item
      display={"flex"}
      container
      flexDirection={"row"}
      width={"100%"}
      gap={1}
      justifyContent={"space-between"}
    >
      <Grid>
        <InputSearch handlesearch={handlesearch} />
      </Grid>
      <Grid display={"flex"} gap={3}>
        <Button
          onClick={() => handlestateFavoreie(infoCurrencys)}
          variant="outlined"
          startIcon={<StarOutlineRoundedIcon />}
          sx={{
            width: "150px",
            height: 56,
            color: "#c6c6c6",
            borderColor: "#c6c6c6",
          }}
        >
          <Grid pr={2}>نشان شده ها</Grid>
        </Button>
        <TextField
          sx={{
            width: "150px",
            color: "#c6c6c6",
            bgcolor: "white",
          }}
          select
          value={select}
          onChange={handleChange}
          SelectProps={{ native: true }}
          variant="outlined"
        >
          <option>
            <Button>بیشترین قیمت</Button>
          </option>
          <option>کمترین قیمت</option>
        </TextField>
      </Grid>
      <Grid
        border={1}
        borderRadius={2}
        display={"flex"}
        alignItems={"center"}
        gap={"5px"}
        sx={{ borderColor: "#c6c6c6" }}
        p={1}
      >
        <Button
          onClick={hadleback}
          variant="secondaryButton"
          sx={{
            borderColor: "#c6c6c6",
          }}
        >
          تومان
        </Button>
        <Button
          onClick={handleTeter}
          variant="secondaryButton"
          sx={{
            borderColor: "#c6c6c6",
          }}
        >
          تتر
        </Button>
      </Grid>
    </Grid>
  );
};

export default Inputslive;
