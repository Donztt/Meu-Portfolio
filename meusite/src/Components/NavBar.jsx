import "../CSS/NavBar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Translations } from "./Translations.js";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DefaultButton from "./ButtonDefault";

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
    { value: "en", label: "English" },
    { value: "pt", label: "Português" },
    { value: "es", label: "Español" },
  ];

  return (
    <div className="NavBar-Content">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link id="logo-container" className="navbar-brand" to="/">
            <div id="logo">Donztt Olv</div>
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="nav mx-auto d-flex justify-content-center">
              <li className="nav-item my-1">
                <DefaultButton href="/" text={TRANSLATION.NAV.HOME} />
              </li>
              <li className="nav-item my-1">
                <DefaultButton
                  href="/sobremim"
                  text={TRANSLATION.NAV.ABOUT_ME}
                />
              </li>
              <li className="nav-item my-1">
                <DefaultButton
                  href="/projetospessoais"
                  text={TRANSLATION.NAV.PERSONAL_PROJECTS}
                />
              </li>
            </ul>
          </div>
          <div className="my-1 mx-auto">
            <Dropdown
              options={options}
              onChange={handleLanguageChange}
              value={language}
              className="languageChangeSelect"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
