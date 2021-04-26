import React from 'react';
import { AccountContext } from '../Account';

const OrderPage = () => {
  const { getSession } = React.useContext(AccountContext);
  const [status, setStatus] = React.useState(false);
  React.useEffect(() => {
    getSession().then((session) => {
      console.log(session);
      setStatus(true);
    });
  }, []);

  return <div>{status ? 'logged in' : 'not logged in'}</div>;
};

export default OrderPage;
