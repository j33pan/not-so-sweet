import { Button } from '@material-ui/core';
import React from 'react';
import { AccountContext } from '../Account';

const OrderPage = () => {
  const { getSession, logout } = React.useContext(AccountContext);
  const [status, setStatus] = React.useState(false);
  React.useEffect(() => {
    getSession()
      .then((session) => {
        console.log(session);
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    (
    <div>
      {status ? 'logged in' : 'not logged in'}
      <Button onClick={logout}>Log out</Button>
    </div>
  )
  );
};

export default OrderPage;
