import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import colors from '../../helpers/colors';

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
        <CardContent style={{ minHeight: 80 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {subtitle}
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
    boxShadow: `2px 10px 14px rgb(33, 33, 33, 0.3)`,
  },
  media: {
    height: 220,
    backgroundColor: colors.white,
    objectFit: 'contain',
  },
});

export default MediaCard;