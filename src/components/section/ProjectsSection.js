import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  TabMenu,
  ProjectCard
} from '../';
import { PROJECTS, COLOR } from '../../constant';


const Menu = ['ALL', 'WEBSITE', 'APPLICATION', 'GAME'];

const ProjectsSection = () => {
  const spacing = 2;
  const classes = useStyles();

  const [selectedType, setSelectedType] = React.useState('ALL');
  const [projectLists, setProjectLists] = React.useState([]);


  React.useEffect(() => {
    if (selectedType === 'ALL') { setProjectLists([...PROJECTS.app, ...PROJECTS.website, ...PROJECTS.game]); }
    if (selectedType === 'APPLICATION') { setProjectLists([...PROJECTS.app]); }
    if (selectedType === 'WEBSITE') { setProjectLists([...PROJECTS.website]); }
    if (selectedType === 'GAME') { setProjectLists([...PROJECTS.game]); }
  }, [selectedType]);

  return (
    <React.Fragment>
      <Grid container className={classes.root} style={{ backgroundColor: COLOR.whiteSmoke }}>
        <Grid item xs={12} style={{ backgroundColor: COLOR.background }}>
          <TabMenu
            items={Menu}
            onChange={(value) => setSelectedType(Menu[value])}
          />
        </Grid>

        <Grid item xs={12} style={{ padding: 32 }}>
          <Grid container justify="center" spacing={spacing}>
            {projectLists.map((item, index) => (
              <Grid key={index} item>
                <ProjectCard
                  title={item.title}
                  subtitle={item.subtitle}
                  thumbnail={item.thumbnail}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    backgroundColor: COLOR.whiteSmoke,
    width: '50px',
    height: '10px'
  }
}));

export default ProjectsSection;
