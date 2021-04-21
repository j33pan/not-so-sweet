import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ReceipePage from './pages/ReceipePage';
import LessonPage from './pages/LessonPage';
import NSSReceipe from './pages/NSSReceipePage';
import CC from './img/egg.jpg';

import {
  Container,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: `url(${CC})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#ddc9a4',
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
      paper: 'rgb(188, 143, 143, 0.8)',
    },
    common: {
      white: 'floralwhite',
    },
    text: {
      primary: '#704343',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Container>
          <Switch>
            <Route component={HomePage} path='/' exact />
            <Route component={ReceipePage} path='/receipe' />
            <Route component={LessonPage} path='/lesson' />
            <Route component={NSSReceipe} path='/nssreceipe' />
          </Switch>
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>
  );;
}

export default App;
