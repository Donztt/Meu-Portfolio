import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/PersonalProjects.css";
import Zoom from "react-reveal/Zoom";
import ExchangeRateVideo from "../Videos/ExchangeRate.mp4";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

function QuoteFilterByCurrency(props) {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  let TRANSLATION = Translations(language);

  useEffect(() => {
    window.addEventListener("storageLanguage", () => {
      setLanguage(localStorage.getItem("language"));
    });
  }, []);
    return (
      <div>
        <NavBar notShow={props.notShowLayout}/>
        <div id="PersonalContentBackground">
          <div id="Personal-Content">
            <div className="container-md">
              <div id="Project">
                <h3>
                  {TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TITLE}
                </h3>
                <p>
                  {TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TEXT1}
                </p>
                <p>
                  {TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TEXT2}
                </p>
                <Zoom top>
                  <div className="my-5">
                    <Player autoPlay muted loop src={ExchangeRateVideo} />
                  </div>
                </Zoom>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <DefaultButton
                        href="https://github.com/Donztt/cotacao-moedas-challenge-Java-Angular"
                        externalLink
                        text={
                          TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE
                            .FONT_CODE
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer notShow={props.notShowLayout}/>
      </div>
    );
}
export default QuoteFilterByCurrency;
