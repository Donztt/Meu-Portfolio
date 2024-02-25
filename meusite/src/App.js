import { Route, BrowserRouter } from 'react-router-dom';
import Home from './PAGES/Home';
import About from './PAGES/About';
import PersonalProjects from './PAGES/PersonalProjects';
import './CSS/default.css';

function App() {
  return (
        <BrowserRouter className="App">
          <Route path="/" exact component={Home}></Route>
          <Route path="/sobremim" component={About}></Route>
          <Route path="/projetospessoais" component={PersonalProjects}></Route>
        </BrowserRouter>
  );
}


export default App;
