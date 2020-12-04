import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import colors from '../../helpers/colors';

const MediaCard = (props) => {
  const { title } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.pinimg.com/originals/cb/f7/74/cbf7743018d4e5b27c3266800937489e.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    width: 345,
    backgroundColor: '#424242',
    color: colors.white,
    borderRadius: 8,
    boxShadow: `2px 10px 8px rgb(33, 33, 33, 0.1)`,
  },
  media: {
    height: 220,
  },
});

export default MediaCard;