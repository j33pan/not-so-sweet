import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import mk from '../img/milkyway.jpg';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import { Button, makeStyles, TextField, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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
  const [query, setQuery] = useState('');
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const APP_ID = '91c5bf0e';
  const APP_KEY = '92ad0d234662a6c6f9b2bdc527df3ecc';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [receipes, setReceipes] = useState([]);
  const getData = async () => {
    const result = await axios.get(url);
    setReceipes(result.data.hits);
    console.log(result);
  };

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
  if (useMediaQuery(theme.breakpoints.up('md'))) cols = 4;

  return (
    <>
      <h1>receipe</h1>
      <TextField variant='filled' label='enter' onChange={onChange} />
      <Button variant='contained' color='primary' onClick={getData}>
        click to get data
      </Button>
      <Container className={classes.root}>
        <GridList cellHeight={300} cols={cols} className={classes.gridList}>
          {receipes.map((receipe) => (
            <GridListTile key={uuidv4()} cols={1}>
              <img src={receipe.recipe.image} alt={receipe.recipe.label} />
              <GridListTileBar
                title={receipe.recipe.label}
                subtitle={<span>by: JP</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </>
  );
}
