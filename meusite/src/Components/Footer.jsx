import React, { useState } from "react";
import "../CSS/Footer.css";
import EnCurriculo from "../Curriculos/Donizetti Oliveira En Curriculo.pdf";
import PtCurriculo from "../Curriculos/Donizetti Oliveira PTBR Curriculo.pdf";
import { Translations } from "./Translations.js";

function Footer(props) {
  const storage = localStorage.getItem("language");
  const [language, setLanguage] = useState(storage);

  window.addEventListener("storageLanguage", () => {
    setLanguage(localStorage.getItem("language"));
  });

  const TRANSLATION = Translations(language);

   
  return !props.notShow? (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://www.linkedin.com/in/donizetti-oliveira-589a15178/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/Donztt">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.instagram.com/doni.oliveirajr">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://open.spotify.com/playlist/7nef82IFyJX9yBjzYwrdc5?si=86902617a00c4dff">
            <i className="fa fa-spotify"></i>
          </a>
        </div>
        <ul className="list-inline">
          <div className="container">
            <div className="row align-items-start">
              <div className="col">
                <li className="list-inline-item">
                  {TRANSLATION.FOOTER.CONTACTS}
                </li>
                <p>(16) 99645-5191</p>
                <p>donizettioliveirajr@gmail.com</p>
              </div>
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
              <div className="col">
                <li className="list-inline-item">
                  {TRANSLATION.FOOTER.ADRESS}
                </li>
                <p>Araraquara - SP</p>
                <p>Parque Alvorada</p>
              </div>
            </div>
          </div>
        </ul>
      </footer>
    </div>
  ) :  null;
}

export default Footer;
