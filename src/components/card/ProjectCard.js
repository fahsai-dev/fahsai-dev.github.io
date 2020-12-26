import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { COLOR } from '../../constant';

const MediaCard = (props) => {
  const { title, subtitle, thumbnail } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={thumbnail}
          title={`ProjectThumbnail_${title}`}
        />
        <CardContent className={classes.card}>
          <Typography gutterBottom variant="h3" component="h3">
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    backgroundColor: '#424242',
    color: COLOR.white,
    borderRadius: 8,
    boxShadow: `2px 10px 14px rgb(33, 33, 33, 0.3)`,
  },
  card: {
    [theme.breakpoints.up('sm')]: {
      minHeight: 110
    },
  },
  media: {
    height: 220,
    backgroundColor: COLOR.disable,
    objectFit: 'cover',
  },
}));

export default MediaCard;