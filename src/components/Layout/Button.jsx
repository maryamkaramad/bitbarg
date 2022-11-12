import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import { ReactComponent as LogoIcon } from "../../assets/img/header-logo.18e678a4.svg";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid>
      <Button variant="mainButton" onClick={handleOpen}>
        ورود / ثبت نام
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box Continer sx={style}>
          <Button onClick={handleClose} sx={{ color: "black" }}>
            <CloseIcon />
          </Button>
          <Grid
            item
            container
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
          >
            <Grid item width={"100px"} display={"flex"}>
              <LogoIcon item />
            </Grid>
            <Grid
              item
              textAlign={"center"}
              gap={2}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
            >
              <Typography
                item
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
                variant={"h6"}
              >
                {"به بیت برگ خوش آمدید."}
              </Typography>
              <Typography
                item
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
                variant={"subtitle1"}
              >
                {"برای ورود یا ثبت نام لطفا شماره موبایل خود را وارد کنید"}
              </Typography>
              <form item>
                <TextField
                  id="outlined-basic"
                  label="شماره تلفن"
                  variant="outlined"
                  placeholder="09xx xxx xxxx"
                  sx={{
                    color: "paimary.main",
                    width: "350px",
                    height: "5px",
                    mb: "70px",
                  }}
                />
                <Grid item container>
                  <Button
                    disabled
                    item
                    sx={{
                      width: "100%",
                      height: "10px",
                      padding: "15px",
                    }}
                    variant={"contained"}
                  >
                    ادامه
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
