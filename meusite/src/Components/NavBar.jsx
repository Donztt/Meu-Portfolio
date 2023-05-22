import "../CSS/NavBar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Translations } from "./Translations.js";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DefaultButton from "./ButtonDefault"

function NavBar() {
  const storage = localStorage.getItem("language");

  const [language, setLanguage] = useState(storage ? storage : "en");

  useEffect(() => {
    localStorage.setItem("language", language);
    window.dispatchEvent(new Event("storageLanguage"));
  }, [language]);

  const TRANSLATION = Translations(language);

  const handleLanguageChange = (e) => {
    setLanguage(e.value);
  };

  const options = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Português' },
    { value: 'es', label: 'Español' },
  ];

  return (
    <div className="NavBar-Content">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Donztt Olv
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav mx-auto">
              <li className="nav-item">
                <DefaultButton href="/" text={TRANSLATION.NAV.HOME}/>
              </li>
              <li className="nav-item">
                <DefaultButton href="/sobremim" text={TRANSLATION.NAV.ABOUT_ME}/>
              </li>
              <li className="nav-item">
                <DefaultButton href="/projetospessoais" text={TRANSLATION.NAV.PERSONAL_PROJECTS}/>
              </li>
              <li className="nav-item">
                <div style={{marginTop: 15}}>
                  <Dropdown options={options} onChange={handleLanguageChange} value={language} className="languageChangeSelect" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
