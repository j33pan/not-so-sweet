import React from 'react';
import { Button, TextField, Paper, Typography, Snackbar } from '@material-ui/core';
import { AccountContext } from '../Account';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />;
}

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

    authenticate(email, password)
      .then((data) => {
        setMsg('Welcome!')
        setSeverity('success')
        handlemsgopen(true);
      })
      .catch((err) => {
        setMsg(err.message)
        setSeverity('error')
        handlemsgopen(true);
      });
  };

  const classes = useStyles();
  const [msg, setMsg] = React.useState('')
  const [msgopen, setMsgopen] = React.useState(false)
  const handlemsgopen = (open) => { setMsgopen(open) }
  const [severity, setSeverity] = React.useState('success')
  return (
    <div>
      <Snackbar open={msgopen} autoHideDuration={6000} onClose={()=>handlemsgopen(false)}>
        <Alert onClose={()=>handlemsgopen(false)} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
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
    </div>
  );
};

export default LoginPage;
