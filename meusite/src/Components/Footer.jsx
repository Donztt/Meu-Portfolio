import React, { useState } from "react";
import "../CSS/Footer.css";
import { Translations } from "./Translations.js";
import DefaultButton from "./ButtonDefault";
import { Link } from "react-router-dom";
import CurriculumPopup from "./CurriculumPopUp"

function Footer(props) {
  const storage = localStorage.getItem("language");
  const [language, setLanguage] = useState(storage);
  const [popupVisible, setPopupVisible] = useState(false);

  window.addEventListener("storageLanguage", () => {
    setLanguage(localStorage.getItem("language"));
  });

  const closePopup = () => {
    setPopupVisible(false);
  };

  const TRANSLATION = Translations(language);

  return (
    <footer className="footer-basic d-flex">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footerItems p-2 mr-auto">
              <div id="footer-logo-container">
                <div id="logo">Donztt Olv</div>
              </div>
              <div className="footerContacts">

              <h3 className="list-inline-item">
                {TRANSLATION.FOOTER.CONTACTS}
              </h3>
              <p>(16) 99645-5191</p>
              <p>donizettioliveirajr@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footerItems p-2 ml-auto">
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
              </div>
              <div className="footerButtons">
                <div className="footerButtom">
                  <Link to="/myProjects">{TRANSLATION.NAV.PERSONAL_PROJECTS}</Link>
                </div>
                <div className="footerButtom">
                  <Link to="/about">{TRANSLATION.NAV.ABOUT_ME}</Link>
                </div>
                <div className="footerButtom">
                  <Link to="/contacts">{TRANSLATION.FOOTER.CONTACTS}</Link>
                </div>
                <div className="footerButtom">
                  <Link onClick={ () => setPopupVisible(true)}>{TRANSLATION.FOOTER.CURRICULUM}</Link>
                </div>
                <CurriculumPopup popupVisible={popupVisible} onClose={closePopup}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
