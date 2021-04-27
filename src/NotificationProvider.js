import React from 'react';

const NotificationContext = React.createContext();

const NotificationProvider = (props) => {
  const [msg, setmsg] = React.useState(null);
  const add = (x) => setmsg(x);

  return (
    <NotificationContext.Provider value={{ msg, add }}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
