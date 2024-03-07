import "../CSS/NavBar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Translations } from "./Translations.js";
import DefaultButton from "./ButtonDefault";
import DropdownDefault from "./DropdownDefault";
import brazilFlag from "../Photos/Flags/brazil.png";
import usaFlag from "../Photos/Flags/usa.png";
import spainFlag from "../Photos/Flags/spain.png";

function NavBar(props) {
  const storage = localStorage.getItem("language");

  const [language, setLanguage] = useState(storage ? storage : "en");

  useEffect(() => {
    localStorage.setItem("language", language);
    window.dispatchEvent(new Event("storageLanguage"));
  }, [language]);

  const TRANSLATION = Translations(language);

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const options = [
    { value: "pt", label: "Português", img: brazilFlag },
    { value: "en", label: "English", img: usaFlag },
    { value: "es", label: "Español", img: spainFlag },
  ];

  return (
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
              <DefaultButton
                withoutBackground
                href="/"
                text={TRANSLATION.NAV.HOME}
              />
            </li>
            <li className="nav-item my-1">
              <DefaultButton
                withoutBackground
                href="/about"
                text={TRANSLATION.NAV.ABOUT_ME}
              />
            </li>
            <li className="nav-item my-1">
              <DefaultButton
                withoutBackground
                href="/myProjects"
                text={TRANSLATION.NAV.PERSONAL_PROJECTS}
              />
            </li>
            <li className="nav-item my-1">
              <DropdownDefault
                options={options}
                onSelect={handleLanguageChange}
                value={language}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
