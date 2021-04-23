import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';

const NSSCard = (props) => {
  console.log(props);
  const {
    data: {
      name,
      image: {
        asset: { url },
      },
    },
  } = props;
  console.log(name);
  console.log(url);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          style={{
            width: '90%',
            height: 200,
            margin: 20,
            marginBottom: 0,
            display: 'block',
          }}
          image={url}
        />
        <CardContent style={{ padding: 10, paddingBottom: 0 }}>
          <Typography variant='h5'>{name}</Typography>
          <Typography
            noWrap
            variant='body2'
            color='textSecondary'
            component='p'
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing style={{ padding: 0 }}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default NSSCard;
