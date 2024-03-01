import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./PAGES/Home";
import About from "./PAGES/About";
import PersonalProjects from "./PAGES/PersonalProjects";
import BombermanGame from "./PAGES/BombermanGame";
import MyOwnPortfolio from "./PAGES/MyOwnPortfolio";
import OrderManagmentSys from "./PAGES/OrderManagmentSys";
import QuoteFilterByCurrency from "./PAGES/QuoteFilterByCurrency";
import RegisNLoginSys from "./PAGES/RegisNLoginSys";
import RPGSurvivalGame from "./PAGES/RPGSurvivalGame";
import "./CSS/default.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/personalProjects" component={PersonalProjects} />
        <Route path="/bombermanGame" component={BombermanGame} />
        <Route path="/myOwnPortfolio" component={MyOwnPortfolio} />
        <Route path="/orderManagmentSys" component={OrderManagmentSys} />
        <Route
          path="/QuoteFilterByCurrency"
          component={QuoteFilterByCurrency}
        />
        <Route path="/regisNLoginSys" component={RegisNLoginSys} />
        <Route path="/RPGSurvivalGame" component={RPGSurvivalGame} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
