import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../CSS/Home.css';
import Image from '../Photos/eu.png';

function Home() {
    return (
        <div>
            <NavBar />

            <div id = "Home-Content">
                <div class="container">
                    <div class="row">
                        <div class="col align-self-start">
                            <div className="container-md">
                                <div id = "Welcome">
                                    <h2><b>Bem vindo!</b></h2>
                                    <h3><strong>Meu nome é <mark id="Donizetti">Donizetti</mark>.</strong></h3>
                                </div>
                                <div id="Apresentacao">
                                    <p>Desenvolvedor Full-Stack, interessado igualmente pelo Back-end e Front-end.</p>
                                    <p>Trabalhei com desenvolvimento ERP utilizando Visual Basic 6, C# e SQL Server.</p>
                                    <p>Este Portfólio também possui projetos pessoais que gostaria de apresentar a você!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col align-self-end">
                            <div id="Perfil-Photo">
                                <img src={Image} class="rounded mx-auto d-block"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;