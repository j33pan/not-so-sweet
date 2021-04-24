import {
    MenuItem,
  Paper,
    Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import uuid from 'react-uuid';

const IngTable = (props) => {
  const { data: { name, line } = {} } = props || {};
  //   console.log(line);
  const num = 1;

  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Typography style={{ fontWeight: 600 }}>{name}</Typography>
      </Toolbar>
      <Table size='small'>
        <TableBody>
          {line?.map((x) => (
            <TableRow key={uuid()}>
              <TableCell>{x.food.name}</TableCell>
              <TableCell align='right'>
                {x.amount.value} {x.amount.unit.name}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>yeilds:</TableCell>
            <TableCell align='right'><TextField type='number' value={num} style={{width:30}} /> <Select value={6}><MenuItem value={6}>6''</MenuItem><MenuItem>7''</MenuItem><MenuItem>8''</MenuItem></Select> Cake</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngTable;
