import React from 'react';
import { Button, FormGroup, TextField } from '@material-ui/core';
import UserPool from '../UserPool';

const SignupPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + ' ' + password);
    UserPool.signUp(email, password, [], null, (err, result) => {
      if (err) console.log(err);
      console.log(result);
    });
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
            Sign up
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default SignupPage;
