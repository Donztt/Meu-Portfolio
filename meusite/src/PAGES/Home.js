import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../CSS/Home.css';
import Image from '../Photos/MyImages/eu.png';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

import { FaJava } from 'react-icons/fa';
import { FaUnity } from 'react-icons/fa';
import { SiBlender } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { ImGithub } from 'react-icons/im';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiOracle } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';

//"@react-icons/all-files/fa/FaBeer";
function Home() {
    return (
        <div>
            <NavBar />
                <div id="Home-Content">
                    <div class="container">
                        <div class="row">
                            <div class="col align-self-start">
                                <div className="container-md">
                                    <Fade left cascade>
                                        <div id="Welcome">
                                            <h2><b>Bem vindo!</b></h2>
                                            <h3><strong>Meu nome é <mark id="Donizetti">Donizetti</mark>.</strong></h3>
                                        </div>
                                    </Fade>
                                    <Fade left>
                                        <div id="introduction">
                                            <p>Desenvolvedor Full-Stack, interessado igualmente pelo Back-end e Front-end.</p>
                                            <p>Trabalhei com desenvolvimento ERP utilizando Visual Basic 6, C# e SQL Server.</p>
                                            <p>Tenho interesse em conhecer novas tecnologias, para ter uma base de conhecimento mais ampla e aprimorar minhas habilidades como programador</p>
                                            <p>Este Portfólio também possui projetos pessoais que gostaria de apresentar a você!</p>
                                            <Link to="/projetospessoais"><button type="button" class="btn btn-primary btn-lg btn-block">Conhecer Projetos</button></Link>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div class="col align-self-end">
                                <Fade right>
                                    <div id="Perfil-Photo">
                                        <img src={Image} class="rounded mx-auto d-block"></img>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                    <div id = "Skills">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h2><FaJava /></h2>
                                </div>
                                <div class="col">
                                    <h2><SiCsharp /></h2>
                                </div>
                                <div class="col">
                                    <h2><DiMysql /></h2>
                                </div>
                                <div class="col">
                                    <h2><FaReact /></h2>
                                </div>
                                <div class="col">
                                    <h2><SiMicrosoftsqlserver /></h2>
                                </div>
                                <div class="col">
                                    <h2><SiVisualstudiocode /></h2>                           
                                </div>
                                <div class="col">
                                    <h2><ImGithub /></h2>   
                                </div>
                                <div class="col">
                                    <h2><SiHtml5 /></h2> 
                                </div>
                                <div class="col">
                                    <h2><SiCss3 /></h2>
                                </div>
                                <div class="col">
                                    <h2><SiJavascript /></h2>
                                </div>
                                <div class="col">
                                    <h2><SiOracle /></h2>
                                </div>
                                <div class="col">
                                    <h2><FaUnity /></h2>
                                </div>
                                <div class="col">
                                    <h2><SiBlender /></h2>
                                </div>
                            </div>
                        </div>
                    </div>
            <Footer />
        </div>
    )
}


export default Home;