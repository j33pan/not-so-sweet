import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, useTheme } from '@material-ui/core';
import React from 'react';
import Sclient from '../Sclient';
const NRDetailPage = () => {
  const [data, setData] = React.useState({})
  const currid = localStorage.getItem('NSSID');
  const query = `*[_type == 'complexcake' && _id == "${currid}"]{
    name, 
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    desc,
    cakereceipe->{name, line[]{amount{value, unit->{name}}, food->{name}}},
    frostingreceipe->{name, line[]{amount{value, unit->{name}}, food->{name}}}
  }`;
  React.useEffect(() => {
    Sclient.fetch(query)
      .then((x) => {
        console.log(x[0])
        setData(x[0])
      })
      .catch(console.error);
  }, []);

  const theme = useTheme();;
  return <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-around',overflow:'hidden' }}>
    <Grid container spacing={2} style={{ width:'95%', padding: 10}}>
      <Grid item xs={12}>
        <Typography variant='h5'>{data.name}</Typography>
        <Typography variant='substitle2'>{data.desc}</Typography>
      </Grid>
      <Grid item xs={12}><img src={data.image?.asset.url} alt='img' style={{width:'100%'}} /></Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Toolbar><Typography style={{fontWeight:'600'}}>{data.cakereceipe?.name}</Typography></Toolbar>
          <Table size='small'>
            <TableBody>
              {data.cakereceipe?.line.map((x)=>
                <TableRow>
                  <TableCell>{x.food.name}</TableCell>
                  <TableCell align='right'>{x.amount.value} {x.amount.unit.name}</TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell>yeilds:</TableCell>
                <TableCell align='right'>4</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Toolbar><Typography style={{fontWeight:'600'}}>{data.frostingreceipe?.name}</Typography></Toolbar>
          <Table size='small'>
            <TableBody>
              {data.frostingreceipe?.line.map((x)=>
                <TableRow>
                  <TableCell>{x.food.name}</TableCell>
                  <TableCell align='right'>{x.amount.value} {x.amount.unit.name}</TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell>yeilds:</TableCell>
                <TableCell align='right'>4</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  </div>;
};

export default NRDetailPage;
