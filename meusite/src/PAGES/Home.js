import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/Home.css";
import Image from "../Photos/MyImages/eu.png";
import { Fade } from "react-reveal";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import transition from "../Components/Transition.jsx"

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: localStorage.getItem("language"),
    };
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Home";

    window.addEventListener("storageLanguage", () => {
      this.setState({
        language: localStorage.getItem("language"),
      });
    });
  }

  render() {
    const TRANSLATION = Translations(this.state.language);

    return (
      <>
        <NavBar />
        <div id="Home-Content">
          <div className="container">
            <div className="row">
              <div className="col align-self-start mt-5">
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
                    </div>
                  </Fade>
                  <Fade left>
                    <div id="introduction">
                      <p>{TRANSLATION.HOME.OFFICE}</p>
                      <p>{TRANSLATION.HOME.TEXT}</p>
                      <DefaultButton
                        href="/personalProjects"
                        text={TRANSLATION.HOME.DISCOVERY_PROJECTS}
                      />
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
        </div>
        <Footer />
      </>
    );
  }
}

export default transition(Home);
