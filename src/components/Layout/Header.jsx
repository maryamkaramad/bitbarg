import { Button, Grid, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/img/header-logo.18e678a4.svg";
import KeepMountedModal from "./Button";
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

    <Grid
      item
      container
      sx={10}
      flexWrap={"nowrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
      my={2}

    >
      <Grid item container>
        <ul>
          <Grid item container flexDirection={"row"} >
            {menuItem.map((item) => (
              <Grid item key={item.title} >
                <Button >
                  <Link to={item.href}>
                    <Typography variant="h4">{item.title}</Typography>
                  </Link>
                </Button>
              </Grid>
            ))}
          </Grid>
        </ul>
      </Grid>

      <Grid
        item
        container
        justifyContent={"flex-end"}
        gap={2}
      >
        <Grid item>
          <KeepMountedModal />
        </Grid>
        <Grid item   >
          <LogoIcon width={100} />
        </Grid>
      </Grid>
    </Grid>

  );
};

export default Header;
