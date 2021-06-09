import { Route, Switch } from 'react-router-dom';
import Home from './PAGES/Home';
import About from './PAGES/About';
import PersonalProjects from './PAGES/PersonalProjects';
import './Components/default.css';


function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/sobremim" component={About}></Route>
          <Route path="/projetospessoais" component={PersonalProjects}></Route>
        </Switch>
      </div>
  );
}


export default App;
