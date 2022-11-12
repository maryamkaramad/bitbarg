import React from "react";
import { Grid, Typography } from "@mui/material";

const TableHeader = () => {
  const names = [
    { id: 1, name: "نشان کردن" },
    { id: 2, name: "تغییرات" },
    { id: 3, name: "قیمت فروش" },
    { id: 4, name: "قیمت خرید" },
    { id: 5, name: "ارز دیجیتال" },
  ];
  return (
    <Grid
      display={"flex"}
      justifyContent={"space-between"}
      borderColor={"#fafafa"}
      alignItems={"center"}
    >
      {names.map((name) => (
        <Grid key={name.id}>
          <Typography> {name.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableHeader;
