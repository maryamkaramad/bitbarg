import React, { useState } from "react";
import { Grid, Button, TextField, ToggleButton } from "@mui/material";

import InputSearch from "./InputSearch";

const Inputslive = ({
  handlesearch,
  setInfoCurrencys,
  infoCurrencys,
  setUnit,
  setSelected,
  selected,
}) => {
  const [select, setSelect] = useState("ترتیب بر اساس");

  const handleChange = (event) => {
    setSelect(event.target.value);

    if (event.target.value === "بیشترین قیمت") {
      handlesortmore();
    }
    if (event.target.value === "کمترین قیمت") {
      handlesorlow();
    }
  };
  const handlesortmore = () => {
    console.log(infoCurrencys);
    const t = infoCurrencys.sort((a, b) => a.askPrice - b.askPrice);
    setInfoCurrencys(t);
  };

  const handlesorlow = () => {};
  const handleTeter = () => {
    setInfoCurrencys(
      infoCurrencys.map((infoCurrency) => ({
        bidPrice: infoCurrency.bidPrice * 2,
        askPrice: infoCurrency.askPrice * 2,
        symbol: infoCurrency.symbol,
        priceChangePercent: infoCurrency.priceChangePercent,
        favorite: infoCurrency.favorite,
      }))
    );
    setUnit("تتر");
  };
  const hadleback = () => {
    setInfoCurrencys(infoCurrencys);
    setUnit("تومان");
  };
  const handlestateFavoreie = () => {
    setSelected(!selected);
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
        <ToggleButton
          onChange={() => handlestateFavoreie(infoCurrencys)}
          selected={selected}
          variant="outlined"
          sx={{
            width: "150px",
            height: 56,
            color: "black",
            borderColor: "#c6c6c6",
          }}
        >
          <Grid pr={2}>نشان شده ها</Grid>
        </ToggleButton>
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
          placeholder="ترتیب بر اساس"
        >
          <option>بیشترین قیمت</option>
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
