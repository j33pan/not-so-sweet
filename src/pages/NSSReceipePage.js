import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import sClient from "../Sclient.js";
import NSSCard from "../components/NSSCard.js";
import uuid from "react-uuid";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
}));

const NSSReceipePge = () => {
  const [receipes, setReceipes] = React.useState([]);
  const query = `*[_type == 'complexcake'] {
    _id,
    name, 
    image {asset->{url}},
    desc,
  }`;
  React.useEffect(() => {
    sClient
      .fetch(query)
      .then((cakes) => {
        setReceipes(cakes);
        // console.log(cakes);
      })
      .catch(console.error);
  }, []);

  const history = useHistory();
  const handleRouteChange = (data) => {
    localStorage.setItem("NSSID", data._id);
    history.push("/not-so-sweet/nssdetail");
  };

  const classes = useStyles();
  const theme = useTheme();
  let imgHeight = 200;
  let gridWidth = "97%";
  if (useMediaQuery(theme.breakpoints.up("xs"))) {
    imgHeight = 250;
  }
  if (useMediaQuery(theme.breakpoints.up("sm"))) {
    gridWidth = "68%";
  }
  if (useMediaQuery(theme.breakpoints.up("md"))) {
    imgHeight = 300;
    gridWidth = "58%";
  }
  if (useMediaQuery(theme.breakpoints.up("lg"))) {
    imgHeight = 350;
  }
  if (useMediaQuery(theme.breakpoints.up("xl"))) {
    imgHeight = 400;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ width: gridWidth, padding: 10 }}>
        {receipes.map((x) => (
          <Grid item xs={12} key={uuid()}>
            <NSSCard
              data={x}
              imgHeight={imgHeight}
              go2detail={() => handleRouteChange(x)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NSSReceipePge;
