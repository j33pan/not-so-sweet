import React from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from './UserPool';

const AccountContext = React.createContext();

const Account = (props) => {
const [authenticated, setAuthenticated] = React.useState(false);

  const getSession = async () => {
    await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
            setAuthenticated(false);
          } else {
            setAuthenticated(true);
            resolve(session);
            console.log(session);
          }
        });
      } else reject();
    });
  };

  const authenticate = async (email, password) => {
    await new Promise((resolve, reject) => {
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
          setAuthenticated(true);
          console.log('success: ', data);
          resolve(data);
        },
        onFailure: (err) => {
          setAuthenticated(false);
          console.log('err: ', err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired: ', data);
          resolve(data);
          setAuthenticated(true);
        },
      });
    });
  };

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) user.signOut();
    setAuthenticated(false);
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        logout,
        authenticated,
        setAuthenticated,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
