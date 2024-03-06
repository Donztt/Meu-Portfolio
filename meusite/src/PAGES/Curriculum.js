import React, { useState, useEffect } from "react";
import "../CSS/PersonalProjects.css";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import transition from "../Components/Transition.jsx";
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
    <div>
      <div className="col">
        <li className="list-inline-item">Downloads</li>
        <p>
          <a href={PtCurriculo} download>
            {TRANSLATION.FOOTER.CURRICULUM} - (PT-BR)
          </a>
        </p>
        <p>
          <a href={EnCurriculo} download>
            {TRANSLATION.FOOTER.CURRICULUM} - (EN)
          </a>
        </p>
      </div>
    </div>
  );
}
export default transition(Curriculum);
