import React from 'react';
import { Button, TextField,Paper,Typography } from '@material-ui/core';
import { AccountContext } from '../Account';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginBottom: theme.spacing(2),
  },
}));

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {  authenticate  } = React.useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + ' ' + password);  
    authenticate(email, password)
    .then(result => {console.log('success: ', result)})
    .catch(err => {console.log('err: ', err)})
  };

  const classes = useStyles()
  return (
    <div style={{minHeight:'40vh', position:'relative'}}>
      <Paper style={{position:'absolute', bottom:0, textAlign:'center', padding:15, paddingTop:30, paddingBottom:30}} >
        <Typography variant='h5' className={classes.textfield}>LOG IN</Typography>
      <form onSubmit={handleSubmit} >
          <TextField label='Email' onChange={(e) => setEmail(e.target.value)} className={classes.textfield} fullWidth variant='outlined' />
          <TextField
            label='password'
            onChange={(e) => setPassword(e.target.value)}
            className={classes.textfield} 
            fullWidth variant='outlined'
          />
          <Button variant='contained' color='primary' type='submit' fullWidth>
            Log in
          </Button>
      </form>
      
      </Paper>

    </div>
  );
};

export default LoginPage;
