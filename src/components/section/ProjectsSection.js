import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../helpers/colors';
import { ProjectCard } from '../card';
import { PROJECTS } from '../../constant';


const ProjectsSection = () => {
  const spacing = 4;
  const classes = useStyles();

  const [selectedType, setSelectedType] = React.useState('all');
  const [projectLists, setProjectLists] = React.useState([]);


  React.useEffect(() => {
    if (selectedType === 'all') { setProjectLists([...PROJECTS.app, ...PROJECTS.website]); }
    if (selectedType === 'app') { setProjectLists([...PROJECTS.app]); }
    if (selectedType === 'web') { setProjectLists([...PROJECTS.website]); }
  }, [selectedType]);

  return (
    <Grid container className={classes.root} spacing={spacing} style={{ backgroundColor: colors.whiteSmoke }}>
      <Grid item xs={12}>
        <div className="font-32 weight-extraBold" style={{ textAlign: 'center' }}>PROJETS</div>
        <div className="font-18 weight-med" style={{ textAlign: 'center' }}>
          <p>All</p>
        </div>
      </Grid>

      <Grid item xs={12}>
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
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 32,
    paddingBottom: 32,
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
    backgroundColor: colors.whiteSmoke,
    width: '50px',
    height: '10px'
  }
}));

export default ProjectsSection;
