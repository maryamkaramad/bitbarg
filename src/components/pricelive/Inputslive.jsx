import React, { useState } from "react";
import { Grid, Button, TextField, ToggleButton } from "@mui/material";

import InputSearch from "../../common/InputSearch";
import { useMemo } from "react";

const Inputslive = ({
  setInfoCurrencys,
  infoCurrencys,
  setUnit,
  setSelected,
  selected,
  setSearch,
  search,
}) => {
  const [select, setSelect] = useState("ترتیب بر اساس");

  const handleChange = (event) => {
    setSelect(event.target.value);

    if (selected === "بیشترین قیمت") {
      handlesortmore();
    }
    if (selected === "کمترین قیمت") {
      handlesorlow();
    }
  };
  const handlesortmore = useMemo(() => {
    return infoCurrencys?.sort((a, b) => a.askPrice - b.askPrice);
  }, [infoCurrencys]);

  const handlesorlow = useMemo(() => {
    return infoCurrencys?.sort((a, b) => b.askPrice - a.askPrice);
  }, [infoCurrencys]);
  const handleTeter = () => {
    setInfoCurrencys(
      infoCurrencys?.map((infoCurrency) => ({
        price: infoCurrency.price,
        symbol: infoCurrency.symbol,
        name: infoCurrency.name,
        priceChangePercent: infoCurrency.priceChangePercent,
        favorite: infoCurrency.favorite,
        iconUrl: infoCurrency.iconUrl,
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
    <Grid item container xs={12} justifyContent={"space-around"}>
      <Grid item xs={4} mx={"2px"}>
        <InputSearch setSearch={setSearch} search={search} />
      </Grid>
      <Grid item xs={3} container justifyContent={"center"} gap={1}>
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
          <Grid item>نشان شده ها</Grid>
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
          <option value={1}>بیشترین قیمت</option>
          <option value={2}>کمترین قیمت</option>
        </TextField>
      </Grid>
      <Grid item xs={4} container justifyContent={"center"}>
        <Grid
          item
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
    </Grid>
  );
};

export default Inputslive;
