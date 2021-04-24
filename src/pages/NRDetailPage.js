import React from 'react';
import Sclient from '../Sclient';

const NRDetailPage = () => {
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
    cakereceipe->{name, line[]{amount{value, unit->{name}}, food->{name}}},
    frostingreceipe->{name, line[]{amount{value, unit->{name}}, food->{name}}}
  }`;
  React.useEffect(() => {
    Sclient.fetch(query)
      .then((cakes) => {
        console.log(cakes);
      })
      .catch(console.error);
  }, []);
  
  return <div>detail</div>;
};

export default NRDetailPage;
