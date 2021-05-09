import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";

const NSSCard = (props) => {
  const {
    data: {
      name,
      image: {
        asset: { url },
      },
      desc,
    },
    imgHeight,
    go2detail,
  } = props;

  return (
    <Card>
      <CardActionArea style={{ padding: 12 }}>
        <CardMedia
          style={{
            width: "100%",
            height: imgHeight,
            display: "block",
          }}
          image={url}
        />
        <CardContent
          style={{
            padding: 0,
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <Typography
            // noWrap
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        style={{
          padding: 10,
          paddingRight: 12,
        }}
      >
        {/* <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton> */}
        <Button
          onClick={go2detail}
          variant="contained"
          size="small"
          color="primary"
          // style={{ marginLeft: "auto" }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default NSSCard;
