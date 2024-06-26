import React, { useState, useEffect } from "react";
import "../CSS/CurriculumPopUp.css";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import EnCurriculoPDF from "../Curriculos/Donizetti Oliveira En Curriculo.pdf";
import PtCurriculoPDF from "../Curriculos/Donizetti Oliveira PTBR Curriculo.pdf";
import EnCurriculoDocx from "../Curriculos/Donizetti Oliveira En Curriculo.docx";
import PtCurriculoDocx from "../Curriculos/Donizetti Oliveira PTBR Curriculo.docx";

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
                <h2>PDF</h2>
                <div id="button">
                  <DefaultButton
                    href={PtCurriculoPDF}
                    download
                    externalLink
                    text={TRANSLATION.FOOTER.CURRICULUM + " - (PT-BR)"}
                  />
                </div>
                <div id="button">
                  <DefaultButton
                    href={EnCurriculoPDF}
                    download
                    externalLink
                    onlyBorderLine
                    text={TRANSLATION.FOOTER.CURRICULUM + " - (EN)"}
                  />
                </div>
              </div>
              <div className="col">
                <h2>DOCX</h2>
                <div id="button">
                  <DefaultButton
                    href={PtCurriculoDocx}
                    download
                    externalLink
                    text={TRANSLATION.FOOTER.CURRICULUM + " - (PT-BR)"}
                  />
                </div >
                <div id="button">
                  <DefaultButton
                    href={EnCurriculoDocx}
                    download
                    externalLink
                    onlyBorderLine
                    text={TRANSLATION.FOOTER.CURRICULUM + " - (EN)"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Curriculum;
