import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import QRCode from "qrcode.react";
import { Grid } from "@material-ui/core";
import { ReactComponent as Bitcoin } from "../../assets/bitcoin.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      "& p": {
        padding: 0,
        margin: 0,
      },
    },
    qr: {
      margin: theme.spacing(2),
    },
    icon: {
      width: "42px",
    },
  })
);

export default (props) => {
  const { address = "", ...rest } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const url = `bitcoin:${address}`;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid
      container
      className={classes.paper}
      spacing={0}
      direction="column"
      alignItems="center"
    >
      <QRCode className={classes.qr} value={url} />
      <h3 id="bitcoin-button-title">ADDRESS:</h3>
      <p id="bitcoin-button-description">{address}</p>
    </Grid>
  );

  return (
    <div>
      <Bitcoin className={classes.icon} onClick={handleOpen}></Bitcoin>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="bitcoin-button-title"
        aria-describedby="bitcoin-button-description"
      >
        {body}
      </Modal>
    </div>
  );
};
