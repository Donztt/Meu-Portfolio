import React, { useState, useEffect } from "react";
import "../CSS/PersonalProjects.css";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import transition from "../Components/Transition.jsx";

export function MyOwnPortfolio(props) {
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
              <h3>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TITLE}</h3>
              <p>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TEXT1}</p>
              <p>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TEXT2}</p>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <DefaultButton
                      href="https://github.com/Donztt/Meu-Portfolio"
                      externalLink
                      text={TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.FONT_CODE}
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
export default transition(MyOwnPortfolio);
