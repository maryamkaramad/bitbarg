import React from "react";
import { Grid, Typography } from "@mui/material";

const TableHeader = () => {
  const names = [
    { id: 1, name: "نشان کردن" },
    { id: 2, name: "تغییرات" },
    { id: 3, name: "قیمت فروش" },
    { id: 4, name: "قیمت خرید" },
   
  ];
  return (
    <Grid
      item
      container
      borderColor={"#fafafa"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      my={10}
      sx={{ bgcolor: "#fafafa", display: { xs: "none", lg: "flex" }, }}
      borderRadius={2}
      p={2}
      columnGap={35}
    >
      {names.map((name) => (
        <Grid item key={name.id}>
          <Typography> {name.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableHeader;
