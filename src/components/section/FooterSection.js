import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { COLOR } from '../../constant';

const FooterSection = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.container}>
        <Typography>© 2020 Fahsai Sripaew.</Typography>
      </footer>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: COLOR.background,
    color: COLOR.white,
    paddingTop: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 40,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 100,
    },
  }
}));

export default FooterSection;
