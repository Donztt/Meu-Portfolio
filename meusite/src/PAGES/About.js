import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/About.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Translations } from "../Components/Translations.js";

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
  }

  render() {
    var birthDay = new Date('1997-06-24');
    var myYo = this.getYo(birthDay);

    const TRANSLATION = Translations(this.state.language);
    const { isVisibleExp1, isVisibleExp2, isVisibleExp3 } = this.state;
    return (
      <>
        <NavBar />
        <div id="AboutContentBackground">
          <div id="About-Content">
            <div className="container-md">
              <Fade top>
                <div id="Data">
                  <h3>Donizetti José Fernando de Oliveira Junior</h3>
                  <p className="text-center">{TRANSLATION.ABOUT_ME.COLLEGE}</p>
                  <p className="text-center"> {TRANSLATION.ABOUT_ME.YO} {myYo} {TRANSLATION.ABOUT_ME.YEARS}</p>
                </div>
              </Fade>
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
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.STACK_DETAILS.PROJECT1}</h4>
                                <ul>
                                  <li>C#</li>
                                  <li>MySQL</li>
                                </ul>
                              </div>
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.STACK_DETAILS.PROJECT2}</h4>
                                <ul>
                                  <li>Visual Basic 6</li>
                                  <li>
                                    Geração de Relatórios (Crystal Reports)
                                  </li>
                                  <li>Notas Fiscais (CFE, NFE, NFCE, CTE)</li>
                                  <li>SQL Server</li>
                                </ul>
                              </div>
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.STACK_DETAILS.PROJECT3}</h4>
                                <ul>
                                  <li>Visual Basic 6</li>
                                  <li>SQL Server</li>
                                </ul>
                              </div>
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.STACK_DETAILS.PROJECT4}</h4>
                                <ul>
                                  <li>C#</li>
                                  <li>SQL Server</li>
                                </ul>
                              </div>
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.STACK_DETAILS.PROJECT5}</h4>
                                <ul>
                                  <li>C#</li>
                                  <li>SQL Server</li>
                                </ul>
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
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS.PROJECT1}</h4>
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
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS.PROJECT2}</h4>
                                <ul>
                                  <li>Java</li>
                                  <li>SpringBoot</li>
                                  <li>Firebase</li>
                                  <li>VueJs</li>
                                  <li>AWS</li>
                                  <li>Postgres</li>
                                </ul>
                              </div>
                              <div className="justify-content-center">
                                <h4>{TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS.PROJECT3}</h4>
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
                              <div className="justify-content-center">
                                <h4>
                                  {TRANSLATION.ABOUT_ME.TRULOGIC.STACK_DETAILS.PROJECT4}
                                </h4>
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
                              <div className="justify-content-center">
                                <h4>
                                {TRANSLATION.ABOUT_ME.AMLABS.STACK_DETAILS.PROJECT1}
                                 </h4>
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
        <Footer />
      </>
    );
  }
}

export default About;
