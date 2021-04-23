import { Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import sClient from '../Sclient.js';
import NSSCard from '../components/NSSCard.js';
import uuid from 'react-uuid'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
}));

const NSSReceipePge = () => {
  const [receipes, setReceipes] = React.useState([]);
  const query = `*[_type == "nssreceipe"] {
    name, 
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    desc
  }`;
  React.useEffect(() => {
    sClient
      .fetch(query)
      .then((cakes) => setReceipes(cakes))
      .catch(console.error);
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  let imgHeight = 200;
  let gridWidth = '90%';
  if (useMediaQuery(theme.breakpoints.up('md'))) {
    gridWidth = '60%';
    imgHeight = 350;
  }
  if (useMediaQuery(theme.breakpoints.up('lg'))) {
    imgHeight = 400;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ width: gridWidth }}>
        {receipes.map((x) => (
          <Grid item xs={12} key={uuid()}>
            <NSSCard data={x} imgHeight={imgHeight} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};;

export default NSSReceipePge;
