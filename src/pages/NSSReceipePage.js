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
    }}`;
  React.useEffect(() => {
    sClient
      .fetch(query)
      .then((cakes) => setReceipes(cakes))
      .catch(console.error);
  }, []);
  console.log(receipes);

  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{  width: '90%'  }}>
        {receipes.map((x)  => ( (
          <Grid item xs={12} key={uuid()}>
            <NSSCard data={x} />
          </Grid>
        )))}
      </Grid>
    </div>
  );
};

export default NSSReceipePge;
