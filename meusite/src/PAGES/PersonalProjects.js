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
import ErrorBoundary from "../Util/ErrorBoundary"
import {
  BeholderModel,
  MouseModel,
  LobModel,
  PilarModel,
  GreatSwordModel,
} from "../Models3D/ModelsGame";
import { Translations } from "../Components/Translations.js";

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
function Canvas3dModels() {
    return (
      <ErrorBoundary
      message = "Não foi possível carregar a apresentação 3D, Verifique se o acelerador de GPU está ativo em seu navegador"
      >
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
      </ErrorBoundary>
    );
}

class PersonalProjects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: localStorage.getItem("language"),
    };
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Projetos Pessoais";

    window.addEventListener("storageLanguage", () => {
      this.setState({
        language: localStorage.getItem("language")
      });
    });
  }

  render() {
    const TRANSLATION = Translations(this.state.language);

    return (
      <div>
        <NavBar />
        <div id="Personal-Content">
          <div className="container-md">
            <div id="Project">
              <h3>RPG Survival Game</h3>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT1}
              </p>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT2}
              </p>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT3}
              </p>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT4}
              </p>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT5}
              </p>
              <Zoom top>
                <div id="Project-Photo">
                  <div className="container">
                    <div className="row">
                      <div className="col align-self-start">
                        <img
                          src={MonsterPhoto}
                          className="rounded mx-auto d-block"
                          alt=""
                        ></img>
                      </div>
                      <div className="col align-self-center">
                        <img
                          src={PersonagemPhoto}
                          className="rounded mx-auto d-block"
                          alt=""
                        ></img>
                      </div>
                      <div className="col align-self-end">
                        <img
                          src={MonsterPhoto2}
                          className="rounded mx-auto d-block"
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                </Zoom>
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
                    <h3>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.VIDEO_TITLE1}</h3>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6800416080004190208?compact=1"
                        title="Demo Jogo"
                        height="284"
                        width="504"
                      ></iframe>
                    </div>
                  </div>
                  <div id="Video2">
                    <h3>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.VIDEO_TITLE2}</h3>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6801603672020160512?compact=1"
                        title="Sistema Crafting"
                        height="284"
                        width="504"
                      ></iframe>
                    </div>
                  </div>
                </div>
    
              <Canvas3dModels />
            </div>
            <div id="Project">
              <h3>Bomberman Ecológico</h3>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TEXT1}
              </p>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TEXT2}
              </p>
              <p>
                {TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TEXT3}
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
              <div className="text-center">
                <a
                  href="https://github.com/Donztt/APS-UNIP-2018---Bomberman-Ecologico"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    id="botao"
                  >
                    {TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.FONT_CODE}
                  </button>
                </a>
              </div>
              <div className="text-center">
                <a href="https://github.com/Donztt/APS-UNIP-2018---Bomberman-Ecologico/releases/download/1.0/Bomberman.jar">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    id="botao"
                  >
                    {TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.DOWNLOAD_GAME}
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
