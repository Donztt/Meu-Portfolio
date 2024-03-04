import { Route, BrowserRouter, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/personalProjects" element={<PersonalProjects/>} />
        <Route path="/bombermanGame" element={<BombermanGame/>} />
        <Route path="/myOwnPortfolio" element={<MyOwnPortfolio/>} />
        <Route path="/orderManagmentSys" element={<OrderManagmentSys/>} />
        <Route
          path="/QuoteFilterByCurrency"
          element={<QuoteFilterByCurrency/>}
        />
        <Route path="/regisNLoginSys" element={<RegisNLoginSys/>} />
        <Route path="/RPGSurvivalGame" element={<RPGSurvivalGame/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
