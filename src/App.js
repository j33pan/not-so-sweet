import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ReceipePage from './pages/ReceipePage';
import LessonPage from './pages/LessonPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={ReceipePage} path='/' exact />
        <Route component={LessonPage} path='/lesson' />
      </Switch>
    </BrowserRouter>
  );;
}

export default App;
