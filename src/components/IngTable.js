import {
  Button,
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
import ExpandMore from '@material-ui/icons/ExpandMore';

const IngTable = (props) => {
  const { data: { name, line, makesnum, makessize } = {} } = props || {};
  // console.log(props);

  return (
    <TableContainer component={Paper}>
      <Toolbar variant='dense'>
        <Typography style={{ fontWeight: 600, flexGrow: 1 }}>{name}</Typography>
        <Button>
          Instructions
          <ExpandMore />
        </Button>
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
