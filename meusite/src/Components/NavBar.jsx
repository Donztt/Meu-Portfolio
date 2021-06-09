import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar-Content">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Donztt Olv</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sobremim/">Sobre mim</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projetospessoais/">Projetos pessoais</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;