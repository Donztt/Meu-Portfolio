import "../CSS/NavBar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Translations } from "./Translations.js";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function NavBar() {
  const storage = localStorage.getItem("language");

  const [language, setLanguage] = useState(storage ? storage : "en");

  useEffect(() => {
    localStorage.setItem("language", language);
    window.dispatchEvent(new Event("storageLanguage"));
  }, [language]);

  const TRANSLATION = Translations(language);

  const handleLanguageChange = (e) => {
    console.log(e);
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
                <Link className="nav-link active" aria-current="page" to="/">
                  {TRANSLATION.NAV.HOME}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobremim/">
                  {TRANSLATION.NAV.ABOUT_ME}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projetospessoais/">
                  {TRANSLATION.NAV.PERSONAL_PROJECTS}
                </Link>
              </li>
            </ul>
          </div>
          <Dropdown options={options} onChange={handleLanguageChange} value={language} className="languageChangeSelect" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
