import React from "react";
import { Grid, Typography } from "@mui/material";
import Continer from "./../components/Continer/Continer";
import bitbarg from "../assets/img/bitbarg.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import Form from "../components/home/Form";

const Home = () => {
  return (
    <Continer>
      <Grid
        container
        sx={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          container
          mt={30}
          gap={5}
          sx={12}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item width={"272px"} height={"109px"}>
            <img src={bitbarg} alt="bitbarg" width={"100%"} height={"100%"} />
          </Grid>
          <Form />
          <Grid item textAlign={"center"} justifyContent={"center"}>
            <Typography>پشتیبانی 24ساعته</Typography>
            <Typography>حتی در روزهای تعطیل</Typography>
            <Grid display={"flex"} alignItems={"center"} color={"primary.main"}>
              <Typography>021-91079677</Typography>
              <LocalPhoneIcon fontSize="small" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Continer>
  );
};

export default Home;
