import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';

function App() {
  return  (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={LessonPage} path='/lesson' />
      </Switch>
    </BrowserRouter>
  );;
}

export default App;
