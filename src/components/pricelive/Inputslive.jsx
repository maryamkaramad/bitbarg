import React from "react";
import { Grid, Button, ToggleButton } from "@mui/material";

import InputSearch from "../../common/InputSearch";

import { useCallback } from "react";

const Inputslive = ({
  setInfoCurrencys,
  infoCurrencys,
  setUnit,
  setSelected,
  selected,
  setSearch,
  search,
  handlesortmor,
  handlesortles,
}) => {
  const handleTeter = useCallback(() => {
    const data = infoCurrencys?.map((infoCurrency) => ({
      ...infoCurrency,
      price: infoCurrency.price,
    }));
    setInfoCurrencys(data);
    setUnit("تتر");
  }, [infoCurrencys, setUnit]);

  const hadleback = useCallback(() => {
    const data = infoCurrencys?.map((infoCurrency) => ({
      ...infoCurrency,
      price: infoCurrency.price,
    }));
    setInfoCurrencys(data);
    setUnit("تومان");
  }, [infoCurrencys, setUnit]);
  const handlestateFavoreie = () => {
    setSelected(!selected);
  };

  return (
    <Grid
      item
      container
      xs={12}
      md={12}
      lg={12}
      justifyContent={"space-around"}
    >
      <Grid item md={4} mx={"2px"} lg={3} sx={{maxWidth:"300px"}}>
        <InputSearch setSearch={setSearch} search={search} />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={4}
        container
        justifyContent={"center"}
        gap={1}
        sx={{ my: { xs: 2, lg: 0 } }}
      >
        <ToggleButton
          onChange={() => handlestateFavoreie(infoCurrencys)}
          selected={selected}
          variant="outlined"
          sx={{
            width: 100,
            height: 56,
            color: "black",
            borderColor: "#c6c6c6",
          }}
        >
          <Grid item>نشان شده ها</Grid>
        </ToggleButton>

        <Button
          variant="outlined"
          onClick={handlesortles}
          sx={{
            width: 100,
            height: 56,
            color: "black",
            borderColor: "#c6c6c6",
          }}
        >
          کمترین قیمت
        </Button>
        <Button
          variant="outlined"
          onClick={handlesortmor}
          sx={{
            width: 100,
            height: 56,
            color: "black",
            borderColor: "#c6c6c6",
          }}
        >
          بیشترین قیمت
        </Button>
      </Grid>
      <Grid item xs={12} md={12} lg={3} container justifyContent={"center"}>
        <Grid
          item
          border={1}
          borderRadius={2}
          display={"flex"}
          alignItems={"center"}
          gap={"5px"}
          sx={{ borderColor: "#c6c6c6" }}
         
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
