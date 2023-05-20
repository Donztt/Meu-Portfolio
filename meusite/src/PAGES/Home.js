import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/Home.css";
import Image from "../Photos/MyImages/eu.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Translations } from "../Components/Translations.js";

import { FaJava, FaReact, FaUnity } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { ImGithub } from "react-icons/im";
import { GiAutoRepair } from "react-icons/gi";

import {
  SiAngular,
  SiBootstrap,
  SiDotNet,
  SiSpring,
  SiCsharp,
  SiOracle,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiVisualstudiocode,
  SiBlender,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiBitbucket,
  SiAdobephotoshop,
  SiIntellijidea,
  SiEclipseide,
  SiTypescript,
} from "react-icons/si";

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      language: localStorage.getItem("language") || "en",
    };

    this.TRANSLATION = Translations(this.state.language);
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Home";
  }

  render() {
    return (
      <div id="general-content">
        <NavBar />
        <div id="Home-Content">
          <div className="container">
            <div className="row">
              <div className="col align-self-start">
                <div className="container-md">
                  <Fade left cascade>
                    <div id="Welcome">
                      <h2>
                        <b>{this.TRANSLATION.HOME.WELCOME}</b>
                      </h2>
                      <h3>
                        <strong>
                          {this.TRANSLATION.HOME.INTRODUCTION} <mark id="Donizetti">Donizetti</mark>.
                        </strong>
                      </h3>
                    </div>
                  </Fade>
                  <Fade left>
                    <div id="introduction">
                      <p>
                        {this.TRANSLATION.HOME.OFFICE}
                      </p>
                      <p>
                      {this.TRANSLATION.HOME.TEXT}
                      </p>
                      <p>
                      {this.TRANSLATION.HOME.TEXT2}
                      </p>
                      <Link to="/projetospessoais">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          {this.TRANSLATION.HOME.DISCOVERY_PROJECTS}
                        </button>
                      </Link>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="col align-self-end">
                <Fade right>
                  <div id="Photo-Canvas">
                    <div id="Perfil-Photo">
                      <img
                        src={Image}
                        className="rounded mx-auto d-block"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <Slide top>
          <div id="Skills">
            <div className="container">
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Java</p>
                  <FaJava id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Spring Boot</p>
                  <SiSpring id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">React</p>
                  <FaReact id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Angular</p>
                  <SiAngular id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">CSharp</p>
                  <SiCsharp id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">.NET</p>
                  <SiDotNet id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">MySQL</p>
                  <DiMysql id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">SQL Server</p>
                  <SiMicrosoftsqlserver id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">PostgresSQL</p>
                  <SiPostgresql id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Oracle SQL</p>
                  <SiOracle id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">VS Code</p>
                  <SiVisualstudiocode id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">IntelliJ</p>
                  <SiIntellijidea id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Eclipse</p>
                  <SiEclipseide id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Github</p>
                  <ImGithub id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Bitbucket</p>
                  <SiBitbucket id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">HTML 5</p>
                  <SiHtml5 id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">CSS 3</p>
                  <SiCss3 id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Javascript</p>
                  <SiJavascript id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Typescript</p>
                  <SiTypescript id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Bootstrap</p>
                  <SiBootstrap id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Unity</p>
                  <FaUnity id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Blender</p>
                  <SiBlender id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Photoshop</p>
                  <SiAdobephotoshop id="SkillIcon" />
                </h2>
              </div>
              <div className="col-2" id="tooltip">
                <h2>
                  <p id="tooltiptext">Infraestrutura</p>
                  <GiAutoRepair id="SkillIcon" />
                </h2>
              </div>
            </div>
          </div>
        </Slide>
        <Footer />
      </div>
    );
  }
}

export default Home;
