import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { COLOR } from "../../constant";

const LoadingModal = (props) => {
  const { loading } = props;
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: 99,
      color: COLOR.white,
    },
  })
);


export default LoadingModal;
