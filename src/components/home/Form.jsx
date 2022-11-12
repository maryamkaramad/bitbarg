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
    <form action="">
      <Grid container justifyContent={"center"} gap={2}>
        <TextField
          onChange={handlechang}
          item
          label="تومان"
          variant="outlined"
          name="price"
          value={form.price}
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
        />
        <PriceModal handlechang={handlechang} form={form} setForm={setForm} />
        <Grid
          item
          continer
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          gap={5}
        >
          <Button item variant={"secondaryButton"}>
            درخواست خرید
          </Button>
          <Button item variant={"secondaryButton"}>
            فروش
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;