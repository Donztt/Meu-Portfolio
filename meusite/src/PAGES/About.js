import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/About.css";
import Fade from "react-reveal/Fade";
import { Translations } from "../Components/Translations.js";

class About extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      language: localStorage.getItem("language"),
    };
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Projetos Pessoais";

    window.addEventListener("storageLanguage", () => {
      this.setState({
        language: localStorage.getItem("language")
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      this.TRANSLATION = Translations(this.state.language);
    }
  }

  render() {
    const TRANSLATION = Translations(this.state.language); 

    return (
      <div>
        <NavBar />
        <div id="AboutContentBackground">
          <div id="About-Content">
            <div className="container-md">
              <Fade top>
                <div id="Data">
                  <h3>Donizetti José Fernando de Oliveira Junior</h3>
                  <p className="text-center">
                    {TRANSLATION.ABOUT_ME.COLLEGE}
                  </p>
                  <p className="text-center"> {TRANSLATION.ABOUT_ME.YO}</p>
                </div>
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
                        <p>
                        {TRANSLATION.ABOUT_ME.IDEIA_SISTEMAS.ABOUT}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <p>
                          {TRANSLATION.ABOUT_ME.AMLABS.ABOUT}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="About-Footer"></div>
              </Fade>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
