import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLOR } from '../../constant';
import { InputOutlined } from '..';

const ContactSection = () => {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');

  return (
    <React.Fragment>
      <div className={classes.container}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={7}>
            <h1>Send me an email</h1>
          </Grid>
          <Grid item xs={12} md={7}>
            <InputOutlined
              label="Name"
              value={name}
              onChange={(text) => setName(text)}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <InputOutlined
              label="E-mail"
              value={email}
              onChange={(text) => setEmail(text)}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <InputOutlined
              useMultiline={true}
              label="Message"
              value={msg}
              onChange={(text) => setMsg(text)}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <button className={classes.Button}>
              SUBMIT
            </button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    color: COLOR.white,
    backgroundColor: COLOR.background,
    padding: 20
  },
  Button: {
    width: 'auto',
    backgroundColor: COLOR.primary,
    color: 'white',
    padding: '16px 40px',
    borderRadius: 60,
    borderColor: COLOR.primary,
  }
}));

export default ContactSection;
