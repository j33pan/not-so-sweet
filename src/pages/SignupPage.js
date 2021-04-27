import React from 'react';
import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import UserPool from '../UserPool';
import { NotificationContext } from '../NotificationProvider';

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginBottom: theme.spacing(2),
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: '17vh',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '24vh'
    }
  }
}));

const SignupPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { add } = React.useContext(NotificationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, result) => {
      if (err) add(err.message);
      else add('Signed up.');
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper
        style={{
          textAlign: 'center',
          padding: 15,
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <Typography variant='h5'>SIGN UP</Typography>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textfield}
            fullWidth
            variant='outlined'
          />
          <TextField
            label='password'
            onChange={(e) => setPassword(e.target.value)}
            className={classes.textfield}
            fullWidth
            variant='outlined'
          />
          <Button variant='contained' color='primary' type='submit' fullWidth>
            Sign up
          </Button>
        </form>
        <Typography>
          Already has an account? <Link to='/login'>Log in</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default SignupPage;
