import React, { useState } from 'react';
import uuid from 'react-uuid';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import axios from 'axios';

const OutsourceReceipePage = () => {
  const [query, setQuery] = useState('chiffon');
  const APP_ID = '91c5bf0e';
  const APP_KEY = '92ad0d234662a6c6f9b2bdc527df3ecc';
  const options = {
    method: 'GET',
    url: 'https://api.edamam.com/search',
    params: {
      q: query,
      to: 20,
      app_id: APP_ID,
      app_key: APP_KEY,
    },
  };
  const [receipes, setReceipes] = React.useState([]);
  const getData = async () => {
    const response = await axios.request(options);
    setReceipes(response.data.hits);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const theme = useTheme();
  let cols = 1;
  if (useMediaQuery(theme.breakpoints.up('sm'))) cols = 3;
  if (useMediaQuery(theme.breakpoints.up('lg'))) cols = 4;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      }}
    >
      <GridList
        cols={cols}
        cellHeight={240}
        spacing={10}
        style={{ padding: 20 }}
      >
        <GridListTile key='Subheader' cols={cols} style={{ height: 'auto' }}>
            <TextField
              label='Explore receipes'
              onChange={(e)  =>  setQuery(e.target.value)}
              onKeyDown={(e) => e.key==='Enter' && getData()}
              style={{width:'100%'}}
            />
        </GridListTile>
        {receipes.map((x) => (
          <GridListTile key={uuid()}>
            <img src={x.recipe.image} alt='logo' />
            <GridListTileBar
              title={x.recipe.label}
              subtitle={'source: ' + x.recipe.source}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default OutsourceReceipePage;
