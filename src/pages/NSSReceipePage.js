import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import sClient from '../Sclient.js';

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
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={300}
        cols={1}
        spacing={7}
        className={classes.gridList}
      >
        {receipes.map((receipe) => (
          <GridListTile cols={1}>
            <img src={receipe.image.asset.url} alt={receipe.name} />
            <GridListTileBar title={receipe.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default NSSReceipePge;
