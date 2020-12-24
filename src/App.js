import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import colors from './helpers/colors';
import { ProjectsSection } from './components/section';
import { IMAGES } from './constant';

function App() {
  const classes = styles();

  return (
    <body style={{ height: '100%' }}>
      <Grid container className={classes.AppHeader}>
        <Grid item xs={12} md={7}>
          <div className="intro-text">
            <div>Hello</div>
            <div><a className="weight-extraBold" style={{ color: colors.primary }}>I'm Fahsai</a>, Front-End </div>
            <div>Developer</div>
          </div>
          <button className={classes.Button}>Get Started</button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img style={{ width: '100%', maxHeight: 300, objectFit: 'contain' }} alt="cover" src={IMAGES.cover} />
        </Grid>
      </Grid>
      <ProjectsSection />
    </body>
  );
}

const styles = makeStyles((theme) => ({
  AppHeader: {
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      padding: 40,
    },
    [theme.breakpoints.up('md')]: {
      padding: 100,
      height: '90vh'
    },
  },
  Button: {
    width: 'auto',
    backgroundColor: colors.primary,
    color: 'white',
    margin: '36px 0px',
    padding: '20px 40px',
    borderRadius: 60,
    borderColor: colors.primary,
    fontSize: 16,
  }
}));

export default App;
