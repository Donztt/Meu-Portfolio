import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./PAGES/Home";
import About from "./PAGES/About";
import PersonalProjects from "./PAGES/PersonalProjects";
import BombermanGame from "./PAGES/BombermanGame";
import MyOwnPortfolio from "./PAGES/MyOwnPortfolio";
import OrderManagmentSys from "./PAGES/OrderManagmentSys";
import QuoteFilterByCurrency from "./PAGES/QuoteFilterByCurrency";
import RegisNLoginSys from "./PAGES/RegisNLoginSys";
import RPGSurvivalGame from "./PAGES/RPGSurvivalGame";
import Contacts from "./PAGES/Contact";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import "./CSS/default.css";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myProjects" element={<PersonalProjects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/bombermanGame" element={<BombermanGame />} />
          <Route path="/myOwnPortfolio" element={<MyOwnPortfolio />} />
          <Route path="/orderManagmentSys" element={<OrderManagmentSys />} />
          <Route path="/regisNLoginSys" element={<RegisNLoginSys />} />
          <Route path="/RPGSurvivalGame" element={<RPGSurvivalGame />} />
          <Route
            path="/QuoteFilterByCurrency"
            element={<QuoteFilterByCurrency />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
