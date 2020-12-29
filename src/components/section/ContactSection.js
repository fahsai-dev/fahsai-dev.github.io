import React from 'react';
import emailjs from 'emailjs-com';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { COLOR } from '../../constant';
import { InputOutlined, LoadingModal } from '..';

const SERVICEID = 'service_ta190hd';
const TEMPLATEID = 'template_jpkrrzr';
const USERID = 'user_Xz7544tXzygRkYwI7PWaR';

const ContactSection = () => {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [alert, setAlert] = React.useState(null);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const clearValue = (email) => {
    setName('');
    setEmail('');
    setMsg('');
  }

  const submit = () => {
    if (!name || !validateEmail(email) || !msg) {
      setError(true);
      return;
    }

    setIsLoading(true);

    const templateParams = {
      name: name,
      email: email,
      message: msg,
    };
    emailjs.send(SERVICEID, TEMPLATEID, templateParams, USERID)
      .then((response) => {
        setAlert(true);
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        setAlert(false);
        console.log('FAILED...', err);
      })
      .finally(() => {
        clearValue();
        setTimeout(() => { setIsLoading(false); }, 2000);
        setTimeout(() => { setAlert(null); }, 5000);
      });
  }

  return (
    <React.Fragment>

      <LoadingModal loading={isLoading} />

      <div className={classes.container}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={7}>
            <h2>Send me an email</h2>
          </Grid>

          {
            alert === true && (
              <Grid item xs={12} md={7}>
                <Alert severity="success">Send email success.</Alert>
              </Grid>
            )
          }
          {
            alert === false && (
              <Grid item xs={12} md={7}>
                <Alert severity="error">Error — please try again later!</Alert>
              </Grid>
            )
          }

          <Grid item xs={12} md={7}>
            <InputOutlined
              label="Name"
              value={name}
              onChange={(text) => setName(text)}
              validText="Please fill out this field"
              isError={error && !name}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <InputOutlined
              label="E-mail"
              value={email}
              onChange={(text) => setEmail(text)}
              validText="Email address is invalid"
              isError={error && !validateEmail(email)}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <InputOutlined
              useMultiline={true}
              label="Message"
              value={msg}
              onChange={(text) => setMsg(text)}
              validText="Please fill out this field"
              isError={error && !msg}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <button className={classes.Button} onClick={() => submit()}>
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
    padding: 16
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
