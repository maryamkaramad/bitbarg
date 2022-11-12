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
      item
      container
      borderColor={"#fafafa"}
      xs={12}
      alignItems={"center"}
      justifyContent={"flex-start"}
      my={10}
      sx={{ bgcolor: "#fafafa" }}
      borderRadius={2}
      p={2}
      gap={"200px"}
    >
      {names.map((name) => (
        <Grid item sx={2} key={name.id} width={"67px"}>
          <Typography> {name.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableHeader;
