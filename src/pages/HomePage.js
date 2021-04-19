import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import mk from '../img/milkyway.jpg';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
}));


export default function TitlebarGridList() {
  const tile = {
    img: mk,
    title: 'test title',
    author: 'test author',
    cols: 1,
  };
  const classes = useStyles();
  const theme = useTheme();

  let cols = 1;
  if (useMediaQuery(theme.breakpoints.up('sm'))) cols = 2;
  if (useMediaQuery(theme.breakpoints.up('md'))) cols = 3;

  return (
    <Container className={classes.root}>
      <GridList cellHeight={300} cols={cols} className={classes.gridList}>
        <GridListTile key={tile.img} cols={tile.cols || 1}>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          />
        </GridListTile>
        <GridListTile key='sdfhakshflsadhj'>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          />
        </GridListTile>
        <GridListTile key='sdf'>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          />
        </GridListTile>
        <GridListTile key='fsafsdfds'>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          />
        </GridListTile>
        <GridListTile key='sdfajsl'>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          />
        </GridListTile>
      </GridList>
    </Container>
  );
}
