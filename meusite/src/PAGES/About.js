import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/About.css";
import Fade from "react-reveal/Fade";

class About extends React.Component {
  componentDidMount() {
    document.title = "Portfólio Donizetti - Projetos Pessoais";
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="About-Content">
          <div className="container-md">
            <Fade top>
              <div id="Data">
                <h3>Donizetti José Fernando de Oliveira Junior</h3>
                <p>
                  Curso: Ciência da Computação (previsão de termino -
                  Dezembro/2021)
                </p>
                <p> Idade: 25 Anos</p>
              </div>
              <div id="Experiences">
                <h3>Ideia Sistemas</h3>
                <div className="container">
                  <div className="row">
                    <div className="col align-self-start">
                      <p>Linguagens de programação: VisualBasic 6 / C#</p>
                      <p>Banco de dados utilizados: SQL Server e MySQL</p>
                      <p>Frameworks: Rest API</p>
                    </div>
                    <div className="col align-self-end">
                      <p>
                      Na empresa especializada em desenvolvimento de sistemas para gestão empresarial (ERP),
                       tive a oportunidade de aprender a linguagem Visual Basic 6 e utilizar essa habilidade
                        para iniciar minha jornada de trabalho. Foi lá que adquiri uma valiosa experiência
                         profissional em programação e trabalhei em conjunto com uma equipe altamente qualificada de profissionais da área.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Experiences">
                <h3>Trulogic</h3>
                <div className="container">
                  <div className="row">
                    <div className="col align-self-start">
                      <p>Linguagens de programação: C# / Java / Javascript / HTML / CSS</p>
                      <p>Banco de dados utilizados: SQL Server e Postgres</p>
                      <p>Frameworks: ASP.NET / React-Native / Angular 12 / Vue.Js / Spring Boot / Hibernate / Rest API / Entity Framework </p>
                      <p>Tipo de Metodologia de trabalho: SCRUM</p>
                    </div>
                    <div className="col align-self-end">
                      <p>
                      A empresa Trulogic foi, para mim, um verdadeiro oásis de conhecimento
                       e companheirismo. Focada em ouvir as necessidades e ideias de seus clientes
                        e transformá-las em realidade, Trulogic me proporcionou uma grande diversidade
                         de projetos e, como resultado, uma riqueza de conhecimentos e habilidades
                          adquiridas. Tive a oportunidade de trabalhar com várias ferramentas altamente
                           utilizadas atualmente, o que impulsionou significativamente a minha jornada como desenvolvedor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Experiences">
                <h3>AMLabs</h3>
                <div className="container">
                  <div className="row">
                    <div className="col align-self-start">
                      <p>Linguagens de programação: C# / Javascript / HTML / CSS</p>
                      <p>Banco de dados utilizados: SQL Server</p>
                      <p>Frameworks: ASP.NET / AngularJs / Git Flow / Entity Framework </p>
                      <p>Tipo de Metodologia de trabalho: SCRUM</p>
                    </div>
                    <div className="col align-self-end">
                      <p>
                      Trabalhando em uma empresa com foco no mercado estrangeiro,
                       eu tive a oportunidade de me desafiar e aprender novas ferramentas
                        como AngularJS e GitFlow. Além disso, participei de reuniões diárias em inglês,
                         o que me permitiu aprimorar minhas habilidades linguísticas enquanto colaborava em projetos
                          emocionantes e desafiadores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="About-Footer"></div>
            </Fade>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
