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
  const { data: { name, line, makesnum, makessize } = {} } = props || {};
  // console.log(props);

  return (
    <TableContainer component={Paper}>
      <Toolbar variant='dense'>
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
            <TableCell>Yeilds:</TableCell>
            <TableCell align='right'>
              {makesnum} {makessize}'' cake
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngTable;
