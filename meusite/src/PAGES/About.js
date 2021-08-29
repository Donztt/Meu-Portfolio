import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../CSS/About.css';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div>
      <NavBar />
      <div id="About-Content">
        <div className="container-md">
          <Fade top>
            <div id="Data">
              <h3>Donizetti José Fernando de Oliveira Junior</h3>
              <p>Curso: Ciência da Computação (previsão de termino - Dezembro/2021)</p>
              <p> Idade: 24 Anos</p>
            </div>
            <div id="Experiences">
              <h3>Ideia Sistemas</h3>
              <div class="container">
                <div class="row">
                  <div class="col align-self-start">
                    <p>Linguagens de programação: VisualBasic 6 / C#</p>
                    <p>Banco de dados utilizados: SQL Server e MySQL</p>
                    <p>Frameworks: Rest API</p>
                  </div>
                  <div class="col align-self-end">
                    <p>
                      Empresa focada em Desenvolvimento de sistemas para gestão empresarial (ERP),
                      pude conhecer e aprender a linguagem Visual Basic 6 onde utilizei para começar minhas jornadas de trabalho.
                      Nela adquiri experiências profissionais em programação e experiência em trabalho conjunto a uma equipe de profissionais da area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="Experiences">
              <h3>Trulogic</h3>
              <div class="container">
                <div class="row">
                  <div class="col align-self-start">
                    <p>Linguagens de programação: C# / Javascript</p>
                    <p>Banco de dados utilizados: SQL Server e Postgres</p>
                    <p>Frameworks: Rest API / ASP.NET / React-Native </p>
                  </div>
                  <div class="col align-self-end">
                    <p>
                      Um mar de conhecimento e companheirismo, a empresa Trulogic até então foi o lugar onde mais adquiri conhecimento.
                      Trulogic é uma empresa focada em ouvir as necessidades ou idéias de seus clientes e transformar em realidade, com a diversidade de projetos,
                      há também muita diversidade de conhecimento sendo adquirida sendo assim pude ter contato com várias ferramentas muito utilizadas atualmente e assim
                      impulsionar minha jornada como desenvolvedor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="About-Footer">
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;