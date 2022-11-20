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
<<<<<<< HEAD

    <Grid item container justifyContent={"center"} alignItems={"center"}>
      <Grid item p={2} container sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }} xs={12} justifyContent={"center"} alignItems={"center"} gap={2}>
        <TextField
=======
    <form action="">
      <Grid container justifyContent={"center"} gap={2} >
        <Grid item container sx={{flexDirection:{xs:"column-reverse", md:"row"}}} gap={2} justifyItems={"center"} alignItem={"center"} xs={6} md={12}>
          <Grid item md={3}>
        <TextField 
        disabled={"disabled"}
>>>>>>> cf313425e7c9be43093a67745b519cc9b60d96bd
          onChange={handlechang}
          item
          label="تومان"
          variant="outlined"
          name="price"
          value={form.price}
<<<<<<< HEAD
          margin="normal"
=======

>>>>>>> cf313425e7c9be43093a67745b519cc9b60d96bd
        />
        </Grid >
        <Grid item md={3}>
        <TextField
      
       
          type={"text"}
          label="واحد"
          variant="outlined"
          name="count"
          value={form.count}
          onChange={handlechang}
          onKeyUp={() => handleFinalprice(form)}
          margin="normal"
        />
<<<<<<< HEAD
        <Grid item>
          <PriceModal handlechang={handlechang} form={form} setForm={setForm} /></Grid>
      </Grid>
      <Grid
        item
        continer

      >
        <Grid item my={2}  >
=======
        </Grid>
        <PriceModal handlechang={handlechang} form={form} setForm={setForm} />
        </Grid>
        <Grid
          item
          continer
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          gap={5}
          md={12}
        >
>>>>>>> cf313425e7c9be43093a67745b519cc9b60d96bd
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
