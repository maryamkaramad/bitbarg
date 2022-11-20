import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import PriceModal from "./ChooseCurrency";

const Form = () => {
  const [form, setForm] = useState({
    symbol: "ETHBTC",
    count: 1,
    price: 0.066305,
  });
  const handlechang = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFinalprice = (form) => {
    const t = form.price * form.count ? form.price * form.count : form.price;
    setForm({ ...form, price: t });
  };

  return (

    <Grid container justifyContent={"center"}>
      <Grid item p={2}>
        <TextField
          onChange={handlechang}
          item
          label="تومان"
          variant="outlined"
          name="price"
          value={form.price}
          margin="normal"
        />
        <TextField
          item
          type={"text"}
          label="واحد"
          variant="outlined"
          name="count"
          value={form.count}
          onChange={handlechang}
          onKeyUp={() => handleFinalprice(form)}
          margin="normal"
        />
        <PriceModal handlechang={handlechang} form={form} setForm={setForm} />
      </Grid>
      <Grid

        continer
        justifyContent={"center"}
        alignItems={"center"}


      >
        <Grid item my={2} >
          <Button item variant={"secondaryButton"}>
            درخواست خرید
          </Button>
        </Grid>
        <Grid item >
          <Button item variant={"secondaryButton"}>
            فروش
          </Button>
        </Grid>
      </Grid>
    </Grid>

  );
};

export default Form;
