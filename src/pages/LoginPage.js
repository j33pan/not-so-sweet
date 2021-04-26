import React from 'react';
import { Button, FormGroup, TextField } from '@material-ui/core';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

const LoginPage = () => {
  // const poolData = {
  //   UserPoolId: 'ca-central-1_XOVX1q80m',
  //   ClientId: '3eagie06ldu70aa7ggkvpt39fh',
  // };
  // const UserPool = new CognitoUserPool(poolData);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + ' ' + password);
    // UserPool.signUp(email, password, [], null, (err, result) => {
    //   if (err) console.log(err);
    //   console.log(result);
    // });
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authdetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    user.authenticateUser(authdetails, {
      onSuccess: (data) => {
        console.log('success: ', data);
      },
      onFailure: (err) => {
        console.log('err: ', err);
      },
      newPasswordRequired: (data) => {
        console.log('newPasswordRequired: ', data);
      },
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
            Log in
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default LoginPage;
