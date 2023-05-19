import './NavBar.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { Translations } from "./Translations.js";

export const useLanguage = () => {
    const [language, setLanguage] = useState('en');
  
    return [language, setLanguage];
  };

function NavBar() {
    
    const TRANSLATION = Translations(useLanguage);
  
    const handleLanguageChange = (e) => {
        useLanguage.setLanguage(e.target.value);
    };
  
    return (
        <div className="NavBar-Content">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
            <header>
                <select value={useLanguage} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                </select>
            </header>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Donztt Olv</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{TRANSLATION.NAV.HOME}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sobremim/">{TRANSLATION.NAV.ABOUT_ME}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projetospessoais/">{TRANSLATION.NAV.PERSONAL_PROJECTS}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;