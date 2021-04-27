import { Snackbar } from '@material-ui/core';
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { NotificationContext } from '../NotificationProvider';

const Notification = () => {
  const { msg } = React.useContext(NotificationContext);
  const [open, setOpen] = React.useState(msg);
  React.useEffect(() => {
    if (msg) handleopen();
  }, [msg]);

  const handleopen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleclose}>
        <Alert severity='info'>{msg}</Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;
