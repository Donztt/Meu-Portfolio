import React, { useState, useEffect } from "react";
import "../CSS/CurriculumPopUp.css";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import EnCurriculo from "../Curriculos/Donizetti Oliveira En Curriculo.pdf";
import PtCurriculo from "../Curriculos/Donizetti Oliveira PTBR Curriculo.pdf";

function Curriculum(props) {

  const [language, setLanguage] = useState(localStorage.getItem("language"));
  let TRANSLATION = Translations(language);

  useEffect(() => {
    window.addEventListener("storageLanguage", () => {
      setLanguage(localStorage.getItem("language"));
    });
  }, []);

  return (
    <>
      {props.popupVisible && (
        <div className="popup-overlay" onClick={props.onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={props.onClose}>
              X
            </button>
            <div className="row">
              <div className="col">
                <DefaultButton
                  href={PtCurriculo}
                  download
                  externalLink
                  text={TRANSLATION.FOOTER.CURRICULUM + " - (PT-BR)"}
                />
                </div>
                <div className="col">
                <DefaultButton
                  href={EnCurriculo}
                  download
                  externalLink
                  onlyBorderLine
                  text={TRANSLATION.FOOTER.CURRICULUM + " - (EN)"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Curriculum;
