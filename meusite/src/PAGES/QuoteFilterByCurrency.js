import React, { useEffect, useState } from "react";
import "../CSS/PersonalProjects.css";
import Zoom from "react-reveal/Zoom";
import ExchangeRateVideo from "../Videos/ExchangeRate.mp4";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import transition from "../Components/Transition.jsx";

export function QuoteFilterByCurrency(props) {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  let TRANSLATION = Translations(language);

  useEffect(() => {
    window.addEventListener("storageLanguage", () => {
      setLanguage(localStorage.getItem("language"));
    });
  }, []);

  useEffect(() =>{
    if (!props.disableScrollTop) {
      window.scrollTo(0, 0);
    }
  });
  
  return (
    <div>
      <div id="PersonalContentBackground">
        <div id="Personal-Content">
          <div className="container-md">
            <div id="Project">
              <h3>{TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TITLE}</h3>
              <h5>Angular12 / Java</h5>
              <Zoom top>
                <div className="my-5">
                  <Player autoPlay muted loop src={ExchangeRateVideo} />
                </div>
              </Zoom>
              <p>{TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.TEXT2}</p>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <DefaultButton
                      href="https://github.com/Donztt/cotacao-moedas-challenge-Java-Angular"
                      externalLink
                      withoutBackground
                      linkStyle
                      text={
                        TRANSLATION.PERSONAL_PROJECTS.EXCHANGE_RATE.FONT_CODE
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default transition(QuoteFilterByCurrency);
