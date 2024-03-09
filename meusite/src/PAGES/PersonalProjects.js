import React from "react";
import "../CSS/PersonalProjects.css";
import { Translations } from "../Components/Translations.js";
import ProjectPreview from "../Components/ProjectPreview.jsx";
import { BombermanGame } from "./BombermanGame";
import { MyOwnPortfolio } from "./MyOwnPortfolio";
import { OrderManagmentSys } from "./OrderManagmentSys";
import { QuoteFilterByCurrency } from "./QuoteFilterByCurrency";
import { RegisNLoginSys } from "./RegisNLoginSys";
import { RPGSurvivalGame } from "./RPGSurvivalGame";
import transition from "../Components/Transition.jsx";

class PersonalProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: localStorage.getItem("language"),
    };
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Projetos Pessoais";
    window.scrollTo(0, 0);
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
        <div id="PersonalContentBackground">
          <div id="Personal-Content">
            <div className="container-md">
              <div className="row">
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TITLE}
                    resume={TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.RESUME}
                    to="/myOwnPortfolio"
                    pagePreview={<MyOwnPortfolio disableScrollTop />}
                  />
                </div>
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TITLE}
                    resume={
                      TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.RESUME
                    }
                    to="/orderManagmentSys"
                    pagePreview={<OrderManagmentSys disableScrollTop />}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TITLE}
                    resume={TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.RESUME}
                    to="/QuoteFilterByCurrency"
                    pagePreview={<QuoteFilterByCurrency disableScrollTop />}
                  />
                </div>
                <div className="col">
                  <ProjectPreview
                    title={TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS.TITLE}
                    resume={TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS.RESUME}
                    to="/regisNLoginSys"
                    pagePreview={<RegisNLoginSys disableScrollTop />}
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
                    pagePreview={
                      <RPGSurvivalGame
                        notShow3dApresentation
                        disableScrollTop
                      />
                    }
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
                    pagePreview={<BombermanGame disableScrollTop />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default transition(PersonalProjects);
