import React, { Suspense } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../CSS/PersonalProjects.css";
import PersonagemPhoto from "../Photos/GameImages/Rpg Game Photo.png";
import MonsterPhoto from "../Photos/GameImages/Rpg Game Monster.png";
import MonsterPhoto2 from "../Photos/GameImages/Rpg Game Monster2.png";
import Zoom from "react-reveal/Zoom";
import ImageGallery from "react-image-gallery";
import Image1 from "../Photos/GameImages/Image1.PNG";
import Image2 from "../Photos/GameImages/Image2.PNG";
import Image3 from "../Photos/GameImages/Image3.PNG";
import Image4 from "../Photos/GameImages/Image4.PNG";
import Image5 from "../Photos/GameImages/Image5.PNG";
import Image1Bomberman from "../Photos/GameImages/bombermanecologico.png";
import Image2Bomberman from "../Photos/GameImages/bombermanecologico2.png";
import Image20191 from "../Photos/Drawnins/broba.jpg";
import Image20192 from "../Photos/Drawnins/oldwiseman.jpg";
import Image20193 from "../Photos/Drawnins/55b7dd86-cfd4-4266-afc5-01e23646a1a0.jpg";
import Image20194 from "../Photos/Drawnins/leprechaum.jpg";
import Image20201 from "../Photos/Drawnins/cowboyfuturista.png";
import Image20202 from "../Photos/Drawnins/drunkenSailor.jpg";
import Image20203 from "../Photos/Drawnins/dragaoeletrico.jpg";
import Image20204 from "../Photos/Drawnins/pennywise.jpg";
import Image20205 from "../Photos/Drawnins/desenho le arrumado.jpg";
import Image20206 from "../Photos/Drawnins/runeskate_fa_art_REMASTERED.jpg";
import Image20221 from "../Photos/Drawnins/cowboyfuturistaRemake.png";
import Image20222 from "../Photos/Drawnins/dragaoeletricoremake.png";
import Image20223 from "../Photos/Drawnins/pennywiseRemake.png";
import Image20224 from "../Photos/Drawnins/drunken sailor remake.png";
import Image20225 from "../Photos/Drawnins/2d.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import {
  BeholderModel,
  MouseModel,
  LobModel,
  PilarModel,
  GreatSwordModel,
} from "../Models3D/ModelsGame";

const imagesGallery = [
  {
    original: Image1,
  },
  {
    original: Image2,
  },
  {
    original: Image3,
  },
  {
    original: Image4,
  },
  {
    original: Image5,
  },
];

const imageGalleryBomberman = [
  {
    original: Image1Bomberman,
  },
  {
    original: Image2Bomberman,
  },
];

const drawnings2019 = [
  {
    original: Image20191,
  },
  {
    original: Image20192,
  },
  {
    original: Image20193,
  },
  {
    original: Image20194,
  },
];

const drawnings2020 = [
  {
    original: Image20201,
  },
  {
    original: Image20202,
  },
  {
    original: Image20203,
  },
  {
    original: Image20204,
  },
  {
    original: Image20205,
  },
  {
    original: Image20206,
  },
];

const drawnings2022 = [
  {
    original: Image20221,
  },
  {
    original: Image20222,
  },
  {
    original: Image20223,
  },
  {
    original: Image20224,
  },
  {
    original: Image20225,
  },
];

function ConfigModels(props) {
  return (
    <group>
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={3}
        angle={10}
        penumbra={1}
        position={[-15, 80, 0]}
        receiveShadow
        castShadow
      />
      <PerspectiveCamera {...props} />
      <OrbitControls />
    </group>
  );
}

class PersonalProjects extends React.Component {
  componentDidMount() {
    document.title = "Portfólio Donizetti - Projetos Pessoais";
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="Personal-Content">
          <div className="container-md">
            <div id="Project">
              <h3>RPG Survival Game</h3>
              <p>Projeto feito na engine Unity 3D na linguagem C#.</p>
              <p>
                Jogo com a temática medieval de fantasia sendo baseado em formas
                Cartoon, e Inspirado em Terraria e Dark Souls.
              </p>
              <p>
                Possuindo o sistema de inventário, montagem de itens (Crafting)
                e sistema de equipamentos
              </p>
              <p>
                O jogo será altamente focado na exploração de mapas e saque de
                monstros, onde terá uma vasta quantidade de recursos espalhadas
                para que sejam usadas para a criação de novos equipamentos que
                auxiliam na sobrevivência e exploração do personagem.
              </p>
              <p>
                Também irá contar com uma quantidade grande de equipamentos que
                o personagem irá conseguir utilizar para se proteger de ataque
                de monstros espalhados pelo mapa, entre elas armas normais e
                armas mágicas que possuem ataque especiais.
              </p>
              <Zoom top>
                <div id="Project-Photo">
                  <div class="container">
                    <div class="row">
                      <div class="col align-self-start">
                        <img
                          src={MonsterPhoto}
                          class="rounded mx-auto d-block"
                          alt=""
                        ></img>
                      </div>
                      <div class="col align-self-center">
                        <img
                          src={PersonagemPhoto}
                          class="rounded mx-auto d-block"
                          alt=""
                        ></img>
                      </div>
                      <div class="col align-self-end">
                        <img
                          src={MonsterPhoto2}
                          class="rounded mx-auto d-block"
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Gallery">
                  <ImageGallery
                    items={imagesGallery}
                    showThumbnails={false}
                    showBullets={true}
                  />
                  ;
                </div>
                <div id="Videos">
                  <div id="Video1">
                    <h3>Visão Geral do jogo</h3>
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6800416080004190208?compact=1"
                        title="Demo Jogo"
                        height="284"
                        width="504"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                  <div id="Video2">
                    <h3>Update: Sistema de Crafting</h3>
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6801603672020160512?compact=1"
                        title="Sistema Crafting"
                        height="284"
                        width="504"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Zoom>
              <div id="Models3D">
                <Canvas
                  shadows
                  dpr={[1, 2]}
                  camera={{ position: [0, 35, 70], fov: 50 }}
                  shadowMap
                >
                  <ConfigModels />
                  <Stars
                    radius={500}
                    depth={150}
                    count={5000}
                    factor={20}
                    saturation={0}
                    fade
                  />
                  <Suspense fallback={null}>
                    <MouseModel position={[0, 6, 0]} />
                    <BeholderModel position={[-28, 20, 0]} />
                    <LobModel position={[28, 6, -2]} />
                    <GreatSwordModel position={[0, -5, 8]} />
                    <PilarModel position={[0, -5, 0]} />
                    <PilarModel position={[-28, -5, 0]} />
                    <PilarModel position={[28, -5, 0]} />
                  </Suspense>
                </Canvas>
              </div>
            </div>
            <div id="Project">
              <h3>Bomberman Ecológico</h3>
              <p>
                Projeto feito em Java, usando a biblioteca Swing
                predominantemente.
              </p>
              <p>
                Foi criado para ser apresentado em um dos trabalhos semestrais
                da faculdade (4° semestre)
              </p>
              <p>
                O jogo é uma junção do jogo Bomberman com um sistema de puzzle
                que baseia-se em coletar todos os objetos da cena para concluir
                a fase, porém dentro de cada fase existem obstáculos que só
                podem ser ultrapassado ao estourar as bombas que o personagem
                carrega. A sacada para se tornar um jogo considerado puzzle
                (quebra-cabeças) é que as bombas são limitadas e o jogador terá
                que usa-las em posições estratégicas para que possa ser efetivo
                em destruir os obstáculos certos e coletar todos os itens
                (lixos) que estão espalhados na fase afim de completa-la.
              </p>
              <Zoom top>
                <div id="Gallery">
                  <ImageGallery
                    items={imageGalleryBomberman}
                    showThumbnails={false}
                    showBullets={true}
                  />
                  ;
                </div>
              </Zoom>
              <div class="text-center">
                <a
                  href="https://github.com/Donztt/APS-UNIP-2018---Bomberman-Ecologico"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                    id="botao"
                  >
                    Código-Fonte
                  </button>
                </a>
              </div>
              <div class="text-center">
                <a href="https://github.com/Donztt/APS-UNIP-2018---Bomberman-Ecologico/releases/download/1.0/Bomberman.jar">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                    id="botao"
                  >
                    Baixar Jogo
                  </button>
                </a>
              </div>
            </div>
            <div id="Project">
              <h3>Artes Digitais</h3>
              <h4>2019</h4>
              <Zoom top>
                <div id="Gallery">
                  <ImageGallery
                    items={drawnings2019}
                    showThumbnails={false}
                    showBullets={true}
                  />
                  ;
                </div>
              </Zoom>
              <h4>2020</h4>
              <Zoom top>
                <div id="Gallery">
                  <ImageGallery
                    items={drawnings2020}
                    showThumbnails={false}
                    showBullets={true}
                  />
                  ;
                </div>
              </Zoom>
              <h4>2022</h4>
              <Zoom top>
                <div id="Gallery">
                  <ImageGallery
                    items={drawnings2022}
                    showThumbnails={false}
                    showBullets={true}
                  />
                  ;
                </div>
              </Zoom>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default PersonalProjects;
