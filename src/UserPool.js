import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ca-central-1_XOVX1q80m',
  ClientId: '3eagie06ldu70aa7ggkvpt39fh',
};
const UserPool = new CognitoUserPool(poolData);

export default UserPool;
