import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import uuid from 'react-uuid';

const IngTable = (props) => {
  const { data: { name, line } = {} } = props || {};
  //   console.log(line);

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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngTable;
