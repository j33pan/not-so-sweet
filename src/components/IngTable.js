import {
  Button,
  CardContent,
  Collapse,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import uuid from "react-uuid";
import ExpandMore from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.short,
    }),
  },
  expandopen: {
    transform: "rotate(180deg)",
  },
}));

const IngTable = (props) => {
  const { data: { name, line, makesnum, makessize, instructions } = {} } =
    props || {};
  // console.log(props);

  const [expanded, setExpanded] = React.useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Toolbar variant="dense">
          <Typography style={{ fontWeight: 600, flexGrow: 1 }}>
            {name}
          </Typography>
          <Button onClick={handleClick}>
            Instructions
            <ExpandMore
              className={clsx(classes.expand, {
                [classes.expandopen]: expanded,
              })}
            />
          </Button>
        </Toolbar>
        <Table size="small">
          <TableBody>
            {line?.map((x) => (
              <TableRow key={uuid()}>
                <TableCell>{x.food.name}</TableCell>
                <TableCell align="right">
                  {x.amount.value} {x.amount.unit.name}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Yeilds:</TableCell>
              <TableCell align="right">
                {makesnum} {makessize}'' cake
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Collapse in={expanded}>
        <CardContent>
          {instructions &&
            instructions.content.map((x, index) => (
              <Typography key={index + "instruction"}>{x}</Typography>
            ))}
        </CardContent>
      </Collapse>
    </div>
  );
};

export default IngTable;
