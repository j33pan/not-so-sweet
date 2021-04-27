import React from 'react';
import { Button, TextField, Paper, Typography } from '@material-ui/core';
import { AccountContext } from '../Account';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
      paddingTop: '24vh',
    },
  },
}));

const LoginPage = (props) => {
  const { history } = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { authenticate } = React.useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + ' ' + password);
    authenticate(email, password)
        .then(data => {
          console.log(data)
          history.push('/')
        })
        .catch(err => {
          console.log(err)
        })
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
        }}>
      <Typography variant='h5'>LOG IN</Typography>
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
            Log in
          </Button>
        </form>
        <Typography>
          need an account? <Link to='/signup'>Sign up</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default LoginPage;
