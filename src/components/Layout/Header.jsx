import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Continer from "./../Continer/Continer";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/img/header-logo.18e678a4.svg";
import KeepMountedModal from "../Button";
const Header = () => {
  const menuItem = [
    {
      title: "خانه",
      href: "/",
    },
    {
      title: "  قیمت لحظه ای",
      href: "/liveprice",
    },
  ];
  return (
    <Continer Continer>
      <Grid
        width={"100%"}
        Continer
        item
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        mt={2}
      >
        <Grid item>
          <ul>
            {menuItem.map((item) => (
              <Button key={item.title}>
                <Link to={item.href}>
                  <Typography variant="h4">{item.title}</Typography>
                </Link>
              </Button>
            ))}
          </ul>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={5}
        >
          <Grid p={2}>
            <KeepMountedModal />
          </Grid>
          <Grid width={"100px"}>
            <LogoIcon />
          </Grid>
        </Grid>
      </Grid>
    </Continer>
  );
};

export default Header;
