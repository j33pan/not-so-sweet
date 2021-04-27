import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import NSSReceipe from './pages/NSSReceipePage';
import CC from './img/egg.jpg';

import {
  Container,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';
import OutsourceReceipePage from './pages/OutsourceReceipePage';
import NRDetailPage from './pages/NRDetailPage';
import OrderPage from './pages/OrderPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { AccountContext } from './Account';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: `url(${CC})`,
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'rgb(188, 143, 143, 0.7)',
          backgroundAttachment: 'fixed',
          height: '100vh',
        },
      },
    },
    // MuiButton: {
    //   label: {
    //     color: 'floralwhite',
    //   },
    // },
  },
  palette: {
    primary: {
      main: 'rgb(188, 143, 143, 0.7)',
      contrastText: 'floralwhite',
    },
    background: {
      paper: 'rgb(188, 143, 143, 0.3)',
      default: 'rgb(255,250,240,0.8)',
    },
    common: {
      white: 'floralwhite',
    },
    text: {
      primary: '#603939',
    },
  },
  typography: {
    fontFamily: [
      'Kanit',
      'Varela Round',
      'cursive',
    ].join(','),
  },
});

function App() {
  const { getSession, logout } = React.useContext(AccountContext);
  const [authenticated, setAuthenticated] = React.useState(false);
  React.useEffect(() => {
    getSession()
      .then((session) => {
        console.log(session);
        setAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar isLoggedin={authenticated} />
        {authenticated?'logged in':'not logged in'}
        <Container>
          <Switch>
            <Route component={HomePage} path='/' exact />
            <Route component={OutsourceReceipePage} path='/outsourcereceipe' />
            <Route component={LessonPage} path='/lesson' />
            <Route component={NSSReceipe} path='/nssreceipe' />
            <Route component={NRDetailPage} path='/nssdetail' />
            <Route component={OrderPage} path='/order' />
            <Route component={SignupPage} path='/signup' />
            <Route component={LoginPage} path='/login' />
          </Switch>
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>      
  );
}

export default App;
