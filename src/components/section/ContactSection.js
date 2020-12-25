import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLOR } from '../../constant';

const ContactSection = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: COLOR.background,
  }
}));

export default ContactSection;
