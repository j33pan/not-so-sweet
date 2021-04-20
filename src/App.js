import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ReceipePage from './pages/ReceipePage';
import LessonPage from './pages/LessonPage';
import CC from './img/cakequiche.jpg';

import {
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
          backgroundPosition: 'center',
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
      main: '#a96e44',
    },
    background: {
      paper: 'rgba(255,255,255,0.3)',
    },
    common: {
      white: 'floralwhite',
    },
    text: {
      primary: '#2d1606',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={HomePage} path='/' exact />
          <Route component={ReceipePage} path='/receipe' />
          <Route component={LessonPage} path='/lesson' />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );;
}

export default App;
