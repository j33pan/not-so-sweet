import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {
  ListSubheader,
  makeStyles,
  TextField,
  useTheme,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ReceipeDialog from '../components/ReceipeDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
  },
}));

export default function TitlebarGridList() {
  const [query, setQuery] = useState('');
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const APP_ID = '91c5bf0e';
  const APP_KEY = '92ad0d234662a6c6f9b2bdc527df3ecc';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=5&to=37`;

  const [receipes, setReceipes] = useState([]);
  const getData = async () => {
    const result = await axios.get(url);
    setReceipes(result.data.hits);
    console.log(result);
  };

  const classes = useStyles();
  const theme = useTheme();
  let cols = 1;
  if (useMediaQuery(theme.breakpoints.up('sm'))) cols = 2;
  if (useMediaQuery(theme.breakpoints.up('md'))) cols = 4;

  const [open, setOpen] = React.useState(false);
  const [receipedata, setReceipedata] = React.useState(null);

  const handleClickOpen = (currReceipedata) => {
    setOpen(true);
    setReceipedata(currReceipedata);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ReceipeDialog open={open} onClose={handleClose} receipe={receipedata} />
      <GridList
        cellHeight={300}
        cols={cols}
        spacing={7}
        className={classes.gridList}
      >
        <GridListTile key='Subheader' cols={cols} style={{ height: 'auto' }} >
          <ListSubheader component='div'>
            <TextField
              label='Explore receipes'
              onChange={onChange}
              onKeyDown={(e) => e.key === 'Enter' && getData()}
            />
          </ListSubheader>
        </GridListTile >
        {receipes.map((receipe) => (
          <GridListTile onClick={()=>handleClickOpen(receipe.recipe.ingredientLines)} key={uuidv4()} cols={1}>
            <img src={receipe.recipe.image} alt={receipe.recipe.label} />
            <GridListTileBar title={receipe.recipe.label} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
