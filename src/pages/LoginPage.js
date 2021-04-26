import React from 'react';
import { Button, FormGroup, TextField } from '@material-ui/core';
import { AccountContext } from '../Account';

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup row>
          <TextField label='email' onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup row>
          <TextField
            label='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button variant='contained' color='primary' type='submit'>
            Log in
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default LoginPage;
