import React from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import { Grid, makeStyles } from '@material-ui/core';
import {
  ProjectsSection,
  ContactSection,
  FooterSection,
} from './components/section';
import { IMAGES, COLOR } from './constant';

let Link = Scroll.Link;
let Element = Scroll.Element;
// let Events = Scroll.Events;
// let scroll = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;

function App() {
  const classes = styles();

  return (
    <body style={{ height: '100%' }}>
      <Grid container className={classes.AppHeader}>
        <Grid item xs={12} md={7}>
          <div className="intro-text">
            <div>Hello</div>
            <div>
              <span className="weight-extraBold" style={{ color: COLOR.primary }}>I'm Fahsai</span>, Front-End
            </div>
            <div>Developer</div>
          </div>
          <Link activeClass="active" to="ProjectsSection" spy={true} smooth={true} offset={0} duration={500}>
            <button className={classes.Button}>
              Get Started
            </button>
          </Link>
        </Grid>
        <Grid item xs={12} md={5}>
          <img style={{ width: '100%', maxHeight: 300, objectFit: 'contain' }} alt="cover" src={IMAGES.cover} />
        </Grid>
      </Grid>

      <Element name="ProjectsSection" className="element">
        <ProjectsSection />
      </Element>

      <ContactSection />

      <FooterSection />
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
    backgroundColor: COLOR.primary,
    color: 'white',
    margin: '36px 0px',
    padding: '20px 40px',
    borderRadius: 60,
    borderColor: COLOR.primary,
    fontSize: 16,
  }
}));

export default App;
