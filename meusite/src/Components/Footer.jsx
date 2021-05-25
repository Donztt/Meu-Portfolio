import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/donizetti-oliveira-589a15178/"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Donztt"><i className="fa fa-github"></i></a>
                    </div>
                    <ul className="list-inline">
                        <div class="container">
                            <div class="row align-items-start">
                                <div class="col">
                                    <li className="list-inline-item">Contatos</li>
                                    <p>(16)99645-5191</p>
                                    <p>donizettioliveirajr@gmail.com</p>
                                </div>
                                <div class="col">
                                    <li className="list-inline-item">Downloads</li>
                                    <p><a href="../Curriculos/(PT-BR) Curriculo Donizetti" download>Currículo - (PT-BR)</a></p>
                                    <p><a href="../Curriculos/(EN) Curriculo Donizetti" download>Currículo - (EN)</a></p>
                                </div>
                                <div class="col">
                                    <li className="list-inline-item">Endereço</li>
                                    <p>Araraquara - SP</p>
                                    <p>Parque Alvorada</p>
                                </div>
                            </div>
                        </div>
                    </ul>
                </footer>
            </div>
        </div>

    )
}

export default Footer;