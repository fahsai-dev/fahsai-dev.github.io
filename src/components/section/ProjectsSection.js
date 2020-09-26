import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../helpers/colors';
import { ProjectCard } from '../card';


const Button = styled.button`
  width: auto;
  background-color: ${colors.primary};
  color: white;
  margin: 36px 0px;
  padding: 20px 40px;
  border-radius: 60px;
  border-color: ${colors.primary};
  font-size: 16px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 32
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  border: {
    marginTop: 34,
    marginBottom: 13,
    backgroundColor: colors.primary,
    width: '50px',
    height: '10px'
  }
}));

const projects = [
  {
    title: '11',
    subTitle: 'dddd'
  },
  {
    title: '11',
    subTitle: 'dddd'
  },
  {
    title: '11',
    subTitle: 'dddd'
  },
]

function ProjectsSection() {
  const [spacing, setSpacing] = React.useState(4);
  const classes = useStyles();

  return (
    <div className="ProjectCard" style={{ backgroundColor: colors.whiteSmoke }}>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12}>
          <div className="font-32 weight-extraBold" style={{ textAlign: 'center' }}>PROJETS</div>
          <div className="font-18 weight-med" style={{ textAlign: 'center' }}>Application / Website</div>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2, 0, 1, 2].map((value) => (
              <Grid key={value} item>
                <ProjectCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}

export default ProjectsSection;
