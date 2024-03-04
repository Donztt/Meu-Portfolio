import React from "react";
import "../CSS/About.css";
import { Fade, Slide } from "react-reveal";
import { Translations } from "../Components/Translations.js";
import ToolTipDefault from "../Components/ToolTipDefault.jsx";
import transition from "../Components/Transition.jsx"

import { FaJava, FaReact, FaUnity } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { ImGithub } from "react-icons/im";
import { GiAutoRepair } from "react-icons/gi";

import {
  SiAngular,
  SiBootstrap,
  SiDotnet,
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

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: localStorage.getItem("language"),
      isVisibleExp1: false,
      isVisibleExp2: false,
      isVisibleExp3: false,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      this.TRANSLATION = Translations(this.state.language);
    }
  }

  toggleVisibilityExp1 = () => {
    this.setState((prevState) => ({
      isVisibleExp1: !prevState.isVisibleExp1,
    }));
  };
  toggleVisibilityExp2 = () => {
    this.setState((prevState) => ({
      isVisibleExp2: !prevState.isVisibleExp2,
    }));
  };
  toggleVisibilityExp3 = () => {
    this.setState((prevState) => ({
      isVisibleExp3: !prevState.isVisibleExp3,
    }));
  };

  getYo = (birthDay) => {
    var today = new Date();
    var newbirthDay = new Date(birthDay);
    var yo = today.getFullYear() - newbirthDay.getFullYear();
    var month = today.getMonth() - newbirthDay.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < newbirthDay.getDate())) {
      yo--;
    }

    return yo;
  };

  render() {
    var birthDay = new Date("1997-06-24");
    var myYo = this.getYo(birthDay);

    const TRANSLATION = Translations(this.state.language);
    const { isVisibleExp1, isVisibleExp2, isVisibleExp3 } = this.state;
    return (
      <>
        <div id="AboutContentBackground">
          <div id="About-Content">
            <div className="container-md">
              <div id="Data">
                <h3>Donizetti José Fernando de Oliveira Junior</h3>
                <p className="text-center">
                  {TRANSLATION.ABOUT_ME.DESCRIPTION}
                </p>
                <p className="text-center">{TRANSLATION.ABOUT_ME.COLLEGE}</p>
                <p className="text-center">
                  {TRANSLATION.ABOUT_ME.YO} {myYo} {TRANSLATION.ABOUT_ME.YEARS}
                </p>
              </div>
              <div>
                <Slide top>
                  <div id="Skills" className="px-5">
                    <div id="SoftSkills">
                      <h2 className="text-center my-3">Soft Skills</h2>
                      <div className="d-flex justify-content-center">
                        <ul className="text-center">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL1}</li>
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL2}</li>
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL3}</li>
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL4}</li>
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL5}</li>
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL6}</li>
                            </div>
                            <div className="col">
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL7}</li>
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL8}</li>
                              <li>{TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL9}</li>
                              <li>
                                {TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL10}
                              </li>
                              <li>
                                {TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL11}
                              </li>
                              <li>
                                {TRANSLATION.ABOUT_ME.SOFT_SKILLS.SKILL12}
                              </li>
                            </div>
                          </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                    <div id="HardSkills">
                      <h2 className="text-center my-3">Hard Skills</h2>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="90"
                              text="Java"
                              icon={<FaJava />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="Spring Boot"
                              icon={<SiSpring />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="React"
                              icon={<FaReact />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="60"
                              text="AngularJs"
                              icon={<SiAngular />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="90"
                              text="CSharp"
                              icon={<SiCsharp />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text=".NET"
                              icon={<SiDotnet />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="50"
                              text="MySQL"
                              icon={<DiMysql />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="SQL Server"
                              icon={<SiMicrosoftsqlserver />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="PostgresSQL"
                              icon={<SiPostgresql />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="40"
                              text="Oracle SQL"
                              icon={<SiOracle />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="90"
                              text="VS Code"
                              icon={<SiVisualstudiocode />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="IntelliJ"
                              icon={<SiIntellijidea />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="70"
                              text="Eclipse"
                              icon={<SiEclipseide />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="90"
                              text="Github"
                              icon={<ImGithub />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="60"
                              text="Bitbucket"
                              icon={<SiBitbucket />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="HTML 5"
                              icon={<SiHtml5 />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="CSS 3"
                              icon={<SiCss3 />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="Javascript"
                              icon={<SiJavascript />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="50"
                              text="Typescript"
                              icon={<SiTypescript />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="66"
                              text="Bootstrap"
                              icon={<SiBootstrap />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="90"
                              text="Unity"
                              icon={<FaUnity />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="60"
                              text="Blender"
                              icon={<SiBlender />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="50"
                              text="Photoshop"
                              icon={<SiAdobephotoshop />}
                            />
                          </div>
                          <div className="col-md-2 col-sm-4">
                            <ToolTipDefault
                              percentage="80"
                              text="Infraestrutura"
                              icon={<GiAutoRepair />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
              <Fade top>
                <div id="Experiences">
                  <h3>Ideia Sistemas</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col align-self-start">
                        <p>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.STACKS}</p>
                        <p>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.DATABASES}</p>
                        <p>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.FRAMEWORKS}</p>
                      </div>
                      <div className="col align-self-end">
                        <p>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.ABOUT}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <>
                  {isVisibleExp1 && (
                    <div id="StackBackground">
                      <Slide top>
                        <div id="Stacks">
                          <div className="container text-center">
                            <div className="row">
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS
                                      .STACK_DETAILS.PROJECT1
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>C#</li>
                                    <li>MySQL</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS
                                      .STACK_DETAILS.PROJECT3
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>Visual Basic 6</li>
                                    <li>SQL Server</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS
                                      .STACK_DETAILS.PROJECT4
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>C#</li>
                                    <li>SQL Server</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS
                                      .STACK_DETAILS.PROJECT5
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>C#</li>
                                    <li>SQL Server</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="row">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS
                                      .STACK_DETAILS.PROJECT2
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>Visual Basic 6</li>
                                    <li>
                                      Geração de Relatórios (Crystal Reports)
                                    </li>
                                    <li>Notas Fiscais (CFE, NFE, NFCE, CTE)</li>
                                    <li>SQL Server</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  )}
                  <button
                    onClick={this.toggleVisibilityExp1}
                    id="Stack-Details"
                  >
                    {TRANSLATION.ABOUT_ME.SHOWMORE}
                  </button>
                </>
              </Fade>
              <Fade top>
                <div id="Experiences">
                  <h3>Trulogic</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col align-self-start">
                        <p>{TRANSLATION.ABOUT_ME.TRULOGIC.STACKS}</p>
                        <p>{TRANSLATION.ABOUT_ME.TRULOGIC.DATABASES}</p>
                        <p>{TRANSLATION.ABOUT_ME.TRULOGIC.FRAMEWORKS}</p>
                        <p>{TRANSLATION.ABOUT_ME.TRULOGIC.WORK_METODOLOGY}</p>
                      </div>
                      <div className="col align-self-end">
                        <p>{TRANSLATION.ABOUT_ME.TRULOGIC.ABOUT}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <>
                  {isVisibleExp2 && (
                    <div id="StackBackground">
                      <Slide top>
                        <div id="Stacks">
                          <div className="container text-center">
                            <div className="row">
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS
                                      .PROJECT1
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>ASP.NET</li>
                                    <li>AngularTS</li>
                                    <li>React-Native</li>
                                    <li>Docker</li>
                                    <li>BitBucket</li>
                                    <li>Google Cloud</li>
                                    <li>SQL Server</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS
                                      .PROJECT2
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>Java</li>
                                    <li>SpringBoot</li>
                                    <li>Firebase</li>
                                    <li>VueJs</li>
                                    <li>AWS</li>
                                    <li>Postgres</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS
                                      .PROJECT3
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>Java</li>
                                    <li>SpringBoot</li>
                                    <li>React-Native</li>
                                    <li>VueJs</li>
                                    <li>Docker</li>
                                    <li>AWS</li>
                                    <li>Postgres</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col">
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS
                                      .PROJECT4
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>Java</li>
                                    <li>SpringBoot</li>
                                    <li>VueJs</li>
                                    <li>Docker</li>
                                    <li>AWS</li>
                                    <li>Postgres</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  )}
                  <button
                    onClick={this.toggleVisibilityExp2}
                    id="Stack-Details"
                  >
                    {TRANSLATION.ABOUT_ME.SHOWMORE}
                  </button>
                </>
              </Fade>
              <Fade top>
                <div id="Experiences">
                  <h3>AMLabs</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col align-self-start">
                        <p>{TRANSLATION.ABOUT_ME.AMLABS.STACKS}</p>
                        <p>{TRANSLATION.ABOUT_ME.AMLABS.DATABASES}</p>
                        <p>{TRANSLATION.ABOUT_ME.AMLABS.FRAMEWORKS}</p>
                        <p>{TRANSLATION.ABOUT_ME.AMLABS.WORK_METODOLOGY}</p>
                      </div>
                      <div className="col align-self-end">
                        <p>{TRANSLATION.ABOUT_ME.AMLABS.ABOUT}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <>
                  {isVisibleExp3 && (
                    <div id="StackBackground">
                      <Slide top>
                        <div id="Stacks">
                          <div className="container text-center">
                            <div className="row">
                              <div>
                                <h4>
                                  {
                                    TRANSLATION.ABOUT_ME.AMLABS.STACK_DETAILS
                                      .PROJECT1
                                  }
                                </h4>
                                <div className="d-flex justify-content-center">
                                  <ul>
                                    <li>C#</li>
                                    <li>ASP.NET</li>
                                    <li>AngularJs</li>
                                    <li>Git Flow</li>
                                    <li>SOAP</li>
                                    <li>SQL Server</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  )}
                  <button
                    onClick={this.toggleVisibilityExp3}
                    id="Stack-Details"
                  >
                    {TRANSLATION.ABOUT_ME.SHOWMORE}
                  </button>
                </>
              </Fade>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default transition(About);
