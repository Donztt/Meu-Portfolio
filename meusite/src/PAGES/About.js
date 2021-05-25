import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../CSS/About.css';

function About() {
  return (
    <div>
      <NavBar />
      <div id="About-Content">
        <div className="container-md">
          <div id="Data">
            <h3>Donizetti José Fernando de Oliveira Junior</h3>
            <p>Curso: Ciência da Computação (previsão de termino - Julho/2021)</p>
            <p> Idade: 23 Anos</p>
          </div>
          <div id="Experiences">
            <h3>Ideia Sistemas</h3>
            <div class="container">
              <div class="row">
                <div class="col align-self-start">
                  <p>Linguagens de programação: VisualBasic 6/C#</p>
                  <p>Banco de dados utilizados: SQL Server e MySQL</p>
                  <p>Demais ferramentas utilizadas: XML e JSON</p>
                </div>
                <div class="col align-self-end">
                  <p>Empresa focada em Desenvolvimento de sistemas para gestão empresarial (ERP),
                    pude conhecer e aprender a linguagem Visual Basic 6 onde utilizei para começar minhas jornadas de trabalho.
                    Nela adquiri experiências profissionais em programação e experiência em trabalho conjunto a uma equipe de profissionais da area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;