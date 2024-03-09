import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import Image from "../Photos/MyImages/eu.png";
import { Fade } from "react-reveal";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import transition from "../Components/Transition.jsx";
import ProjectPreview from "../Components/ProjectPreview.jsx";
import { OrderManagmentSys } from "./OrderManagmentSys";
import { RPGSurvivalGame } from "./RPGSurvivalGame";
import { QuoteFilterByCurrency } from "./QuoteFilterByCurrency";
import { SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: localStorage.getItem("language"),
    };
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Home";
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
      <div id="Home-Content">
        <div className="container">
          <div className="row mb-5">
            <div className="col mt-5">
              <div className="container-md">
                <Fade left cascade>
                  <div id="Welcome">
                    <h2>
                      <b>{TRANSLATION.HOME.WELCOME}</b>
                    </h2>
                    <h3>
                      <strong>
                        {TRANSLATION.HOME.INTRODUCTION}{" "}
                        <mark id="Donizetti">Donizetti</mark>.
                      </strong>
                    </h3>
                    <div id="office">
                      <p>{TRANSLATION.HOME.OFFICE}</p>
                    </div>
                  </div>
                </Fade>
                <Fade left>
                  <div id="introduction">
                    <p>{TRANSLATION.HOME.TEXT}</p>
                    <div className="container p-0">
                      <div className="row">
                        <div className="col">
                          <DefaultButton
                            href="/contacts"
                            text={TRANSLATION.FOOTER.CONTACTS}
                          />
                        </div>
                        <div className="col">
                          <DefaultButton
                            href="/myProjects"
                            onlyBorderLine
                            text={TRANSLATION.HOME.DISCOVERY_PROJECTS}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col align-self-end">
              <div id="Photo-Canvas">
                <div id="Perfil-Photo">
                  <Link to="/about">
                    <img
                      src={Image}
                      className="rounded mx-auto d-block"
                      alt=""
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recentProjects text-center">
          <h2>{TRANSLATION.HOME.RECENT_PROJECTS}</h2>
          <div className="recentProjectList">
            <div className="row">
              <div className="col">
                <ProjectPreview
                  title={TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TITLE}
                  resume={TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.RESUME}
                  to="/QuoteFilterByCurrency"
                  pagePreview={<QuoteFilterByCurrency disableScrollTop/>}
                  whiteStyle
                  usePagePosition
                />
              </div>
              <div className="col">
                <ProjectPreview
                  title={TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TITLE}
                  resume={TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.RESUME}
                  to="/orderManagmentSys"
                  pagePreview={<OrderManagmentSys disableScrollTop/>}
                  whiteStyle
                  usePagePosition
                />
              </div>
              <div className="col">
                <ProjectPreview
                  title={TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TITLE}
                  resume={
                    TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.RESUME
                  }
                  to="/RPGSurvivalGame"
                  pagePreview={<RPGSurvivalGame notShow3dApresentation disableScrollTop/>}
                  whiteStyle
                  usePagePosition
                />
              </div>
            </div>
          </div>
          <div className="moreProjectsButton py-3">
            <DefaultButton
              href="/myProjects"
              withoutBackground
              linkStyle
              text={TRANSLATION.HOME.MORE_PROJECTS}
            />
          </div>
        </div>
        <div className="bestSkills text-center">
          <h2 className="bestSkillsTitle">
            {TRANSLATION.HOME.BEST_SKILLS_TITLE}
          </h2>
          <h3>{TRANSLATION.HOME.BEST_SKILLS_TEXT}</h3>
          <div className="row p-5">
            <div className="col">
              <div className="bestSkillsItem">
                <SiReact size={70} />
                <p>React</p>
              </div>
            </div>
            <div className="col">
              <div className="bestSkillsItem">
                <FaJava size={70} />
                <p>Java</p>
              </div>
            </div>
            <div className="col">
              <div className="bestSkillsItem">
                <IoLogoJavascript size={70} />
                <p>Javascript</p>
              </div>
            </div>
            <div className="col">
              <div className="bestSkillsItem">
                <FaGithub size={70} />
                <p>Github</p>
              </div>
            </div>
          </div>
          <DefaultButton
            href="/about"
            withoutBackground
            linkStyle
            text={TRANSLATION.HOME.BEST_SKILLS_BUTTON}
          />
        </div>
      </div>
    );
  }
}

export default transition(Home);
