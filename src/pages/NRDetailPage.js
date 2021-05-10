import { Grid, Typography } from "@material-ui/core";
import React from "react";
import IngTable from "../components/IngTable";
import Sclient from "../Sclient";
const NRDetailPage = () => {
  const [data, setData] = React.useState(null);
  const {
    name,
    desc,
    image: { asset: { url } = {} } = {},
    frostingreceipe,
    cakereceipe,
  } = data || {};
  const currid = localStorage.getItem("NSSID");
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
    cakereceipe->{name, line[]{amount{value, unit->{name}}, food->{name}}, makesnum, makessize, instructions->{content}},
    frostingreceipe->{name, line[]{amount{value, unit->{name}}, food->{name}}, makesnum, makessize, instructions->{content}},
  }`;
  React.useEffect(() => {
    Sclient.fetch(query)
      .then((x) => {
        console.log(x[0]);
        setData(x[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2} style={{ maxWidth: 700, paddingBottom: 30 }}>
        <Grid item xs={12}>
          <Typography variant="h5">{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{desc}</Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={url} alt="img" style={{ width: "100%" }} />
        </Grid>
        {cakereceipe && (
          <Grid item xs={12}>
            <IngTable data={cakereceipe} />
          </Grid>
        )}
        {frostingreceipe && (
          <Grid item xs={12}>
            <IngTable data={frostingreceipe} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default NRDetailPage;
