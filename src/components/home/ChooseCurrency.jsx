import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import InputSearch from "../../common/InputSearch";
import { handelgetdataprice } from "../../axios/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function PriceModal({ handlechange, form, setForm }) {
  const [open, setOpen] = React.useState(false);
  const [currencys, setCurencys] = useState([]);
  const [search, setSearch] = useState("");
  const handleOpen = () => {
    setOpen(true);
    setSearch("");
  };
  const handleClose = () => {
    setSearch("");
    setOpen(false);
  };

  const handelgetdata = async () => {
    const data = await handelgetdataprice();
    setCurencys(data);
  };
  useEffect(() => {
    handelgetdata();
  }, []);

  const handlesetinput = (currency) => {
    setForm(currency);
    setOpen(false);
    setSearch("");
  };

  return (
    <Grid item>
      <TextField
        label=" انتخاب ارز"
        variant="outlined"
        onClick={handleOpen}
        name="symbol"
        value={form.symbol}
        onChange={handlechange}
      />
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        width={"600px"}
      >
        <Box Continer sx={style}>
          <Grid item continer display={"flex"} justifyContent={"space-between"}>
            <Typography>انتخاب ارز</Typography>
            <Button onClick={handleClose} sx={{ color: "black" }}>
              <CloseIcon />
            </Button>
          </Grid>

          <Grid item container justifyContent={"center"} mb={2}>
            <InputSearch search={search} setSearch={setSearch} />
          </Grid>

          <Grid item maxHeight={"350px"} sx={{ overflowY: "scroll" }}>
            {currencys
              .filter((m) =>
                m.symbol.toLowerCase().includes(search.toLowerCase())
              )
              .map((currency) => (
                <Grid continer padding={2} width={"100%"}>
                  <Button
                    item
                    onClick={() => handlesetinput(currency)}
                    sx={{ width: "100%", color: "black" }}
                  >
                    <Grid
                      continer
                      display={"flex"}
                      padding={2}
                      justifyContent={"space-between"}
                      width={"100%"}
                      alignItems={"center"}
                    >
                      <Grid item>
                        <Typography> نماد</Typography>
                        <Typography>{currency.symbol}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>قیمت خرید </Typography>
                        <Typography>{currency.price * 36000} تومان</Typography>
                      </Grid>
                      <IconButton
                        aria-label="done"
                        size="small"
                        sx={{ color: "white", bgcolor: "primary.light" }}
                        variant="mainButton"
                      >
                        <DoneIcon item fontSize="small" />
                      </IconButton>
                    </Grid>
                  </Button>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
