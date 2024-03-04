import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/PersonalProjects.css";
import { Translations } from "../Components/Translations.js";
import ProjectPreview from "../Components/ProjectPreview.jsx";
import BombermanGame from "./BombermanGame";
import MyOwnPortfolio from "./MyOwnPortfolio";
import OrderManagmentSys from "./OrderManagmentSys";
import QuoteFilterByCurrency from "./QuoteFilterByCurrency";
import RegisNLoginSys from "./RegisNLoginSys";
import RPGSurvivalGame from "./RPGSurvivalGame";
import transition from "../Components/Transition.jsx"

class PersonalProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: localStorage.getItem("language"),
    };
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Projetos Pessoais";

    window.addEventListener("storageLanguage", () => {
      this.setState({
        language: localStorage.getItem("language"),
      });
    });
  }

  render() {
    const TRANSLATION = Translations(this.state.language);

    return (
      <div>
        <NavBar />
        <div id="PersonalContentBackground">
          <div id="Personal-Content">
            <div className="container-md">
              <div className="row">
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TITLE}
                    resume={TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.RESUME}
                    to="/myOwnPortfolio"
                    pagePreview={<MyOwnPortfolio notShowLayout={true} />}
                  />
                </div>
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TITLE}
                    resume={
                      TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.RESUME
                    }
                    to="/orderManagmentSys"
                    pagePreview={<OrderManagmentSys notShowLayout={true} />}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TITLE}
                    resume={TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.RESUME}
                    to="/QuoteFilterByCurrency"
                    pagePreview={<QuoteFilterByCurrency notShowLayout={true} />}
                  />
                </div>
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS.TITLE}
                    resume={TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS.RESUME}
                    to="/regisNLoginSys"
                    pagePreview={<RegisNLoginSys notShowLayout={true} />}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ProjectPreview
                    title={
                      TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TITLE
                    }
                    resume={
                      TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.RESUME
                    }
                    to="/RPGSurvivalGame"
                    pagePreview={<RPGSurvivalGame notShowLayout={true} />}
                  />
                </div>
                <div className="col">
                  <ProjectPreview
                    title={
                      TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TITLE
                    }
                    resume={
                      TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.RESUME
                    }
                    to="/bombermanGame"
                    pagePreview={<BombermanGame notShowLayout={true} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default transition(PersonalProjects);
