import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/Home.css";
import Image from "../Photos/MyImages/eu.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx"
import ToolTipDefault from "../Components/ToolTipDefault.jsx"

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
      language: localStorage.getItem("language"),
    };
  }
  
  componentDidMount() {
    document.title = "Portfólio Donizetti - Home";

    window.addEventListener("storageLanguage", () => {
      this.setState({
        language: localStorage.getItem("language")
      });
    });
  }
  
  render() {
    const TRANSLATION = Translations(this.state.language); 

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
                        <b>{TRANSLATION.HOME.WELCOME}</b>
                      </h2>
                      <h3>
                        <strong>
                          {TRANSLATION.HOME.INTRODUCTION} <mark id="Donizetti">Donizetti</mark>.
                        </strong>
                      </h3>
                    </div>
                  </Fade>
                  <Fade left>
                    <div id="introduction">
                      <p>
                        {TRANSLATION.HOME.OFFICE}
                      </p>
                      <p>
                      {TRANSLATION.HOME.TEXT}
                      </p>
                      <p>
                      {TRANSLATION.HOME.TEXT2}
                      </p>
                      <DefaultButton href="/projetospessoais" text={TRANSLATION.HOME.DISCOVERY_PROJECTS}/>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="col align-self-end">
                <Fade right>
                  <div id="Photo-Canvas">
                    <div id="Perfil-Photo">
                      <Link to="/sobremim">
                      <img
                        src={Image}
                        className="rounded mx-auto d-block"
                        alt=""
                      ></img>
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div id="SkillsBackground">
          <Slide top>
            <div id="Skills">
              <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "90" text = "Java" icon= { <FaJava id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "60" text = "Spring Boot" icon= { <SiSpring id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = "React" icon= { <FaReact id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "60" text = "AngularJs" icon= { <SiAngular id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "90" text = "CSharp" icon= { <SiCsharp id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = ".NET" icon= { <SiDotNet id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "50" text = "MySQL" icon= { <DiMysql id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = "SQL Server" icon= { <SiMicrosoftsqlserver id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "60" text = "PostgresSQL" icon= { <SiPostgresql id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "40" text = "Oracle SQL" icon= { <SiOracle id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "90" text = "VS Code" icon= { <SiVisualstudiocode id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = "IntelliJ" icon= { <SiIntellijidea id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "70" text = "Eclipse" icon= { <SiEclipseide id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "90" text = "Github" icon= { <ImGithub id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "60" text = "Bitbucket" icon= { <SiBitbucket id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = "HTML 5" icon= { <SiHtml5 id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = "CSS 3" icon= { <SiCss3 id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = "Javascript" icon= { <SiJavascript id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "50" text = "Typescript" icon= { <SiTypescript id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "66" text = "Bootstrap" icon= { <SiBootstrap id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "90" text = "Unity" icon= { <FaUnity id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "60" text = "Blender" icon= { <SiBlender id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "50" text = "Photoshop" icon= { <SiAdobephotoshop id="SkillIcon" /> }/>
                </div>
                <div className="col-md-2 col-sm-4">
                  <ToolTipDefault percentage= "80" text = "Infraestrutura" icon= { <GiAutoRepair id="SkillIcon" /> }/>
                </div>
              </div>
              </div>
            </div>
          </Slide>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
