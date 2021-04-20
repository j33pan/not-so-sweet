import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ReceipePage from './pages/ReceipePage';
import LessonPage from './pages/LessonPage';
import CC from './img/cupcake.jpg';

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
          height: '100vh',
        },
      },
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
