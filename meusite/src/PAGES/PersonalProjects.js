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
import orderManagmentPhoto1 from "../Photos/orderManagementPhotos/gestão1.PNG";
import orderManagmentPhoto2 from "../Photos/orderManagementPhotos/gestão2.PNG";
import orderManagmentPhoto3 from "../Photos/orderManagementPhotos/gestão3.PNG";
import orderManagmentPhoto4 from "../Photos/orderManagementPhotos/gestão4.PNG";
import orderManagmentPhoto5 from "../Photos/orderManagementPhotos/gestão5.PNG";
import dollarExchangeVideo from "../Videos/dollarExchange.mp4";
import crudReactJsAspNet from "../Videos/CRUDReactJsASPNET.mp4";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import ErrorBoundary from "../Util/ErrorBoundary";
import {
  BeholderModel,
  MouseModel,
  LobModel,
  PilarModel,
  GreatSwordModel,
} from "../Models3D/ModelsGame";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import { Player } from "video-react";

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

const imageGaleryOrderManagement = [
  {
    original: orderManagmentPhoto1,
  },
  {
    original: orderManagmentPhoto2,
  },
  {
    original: orderManagmentPhoto3,
  },
  {
    original: orderManagmentPhoto4,
  },
  {
    original: orderManagmentPhoto5,
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
    <ErrorBoundary message="Não foi possível carregar a apresentação 3D, Verifique se o acelerador de GPU está ativo em seu navegador">
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
    super(props);

    this.state = {
      language: localStorage.getItem("language"),
    };
  }

  componentDidMount() {
    document.title = "Portfólio Donizetti - Projetos Pessoais";

    window.addEventListener("storageLanguage", () => {
      this.setState({
        language: localStorage.getItem("language"),
      });
    });
  }

  render() {
    const TRANSLATION = Translations(this.state.language);

    return (
      <div>
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
        <NavBar />
        <div id="PersonalContentBackground">
          <div id="Personal-Content">
            <div className="container-md">
              <div id="Project">
                <h3>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TITLE}</h3>
                <p>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TEXT1}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TEXT2}</p>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <DefaultButton
                        href="https://github.com/Donztt/Meu-Portfolio"
                        externalLink
                        text={TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.FONT_CODE}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="Project">
                <h3>
                  {TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS.TITLE}
                </h3>
                <p>
                  {TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS.TEXT1}
                </p>
                <p>
                  {TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS.TEXT2}
                </p>
                <Zoom top>
                  <div className="my-5">
                    <Player autoPlay muted loop src={crudReactJsAspNet} />
                  </div>
                </Zoom>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <DefaultButton
                        href="https://github.com/Donztt/CRUD-ReactJs-ASP.NET-V2"
                        externalLink
                        text={
                          TRANSLATION.PERSONAL_PROJECTS.CRUD_REACTJS
                            .FONT_CODE
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="Project">
                <h3>
                  {TRANSLATION.PERSONAL_PROJECTS.DOLLAR_EXCHANGE_RATE.TITLE}
                </h3>
                <p>
                  {TRANSLATION.PERSONAL_PROJECTS.DOLLAR_EXCHANGE_RATE.TEXT1}
                </p>
                <p>
                  {TRANSLATION.PERSONAL_PROJECTS.DOLLAR_EXCHANGE_RATE.TEXT2}
                </p>
                <Zoom top>
                  <div className="my-5">
                    <Player autoPlay muted loop src={dollarExchangeVideo} />
                  </div>
                </Zoom>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <DefaultButton
                        href="https://github.com/Donztt/cotacao-dolar-challenge-Java-Angular"
                        externalLink
                        text={
                          TRANSLATION.PERSONAL_PROJECTS.DOLLAR_EXCHANGE_RATE
                            .FONT_CODE
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="Project">
                <h3>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TITLE}</h3>
                <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT1}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT2}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT3}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT4}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT5}</p>
                <Zoom top>
                  <div id="Gallery">
                    <ImageGallery
                      items={imageGaleryOrderManagement}
                      showThumbnails={false}
                      showBullets={true}
                    />
                    ;
                  </div>
                </Zoom>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <DefaultButton
                        href="https://github.com/Donztt/AngularJs---Java-Challenge"
                        externalLink
                        text={
                          TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT
                            .FONT_CODE1
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <DefaultButton
                        href="https://github.com/Donztt/AngularJs---Asp.net-Challenge-"
                        externalLink
                        text={
                          TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT
                            .FONT_CODE2
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="Project">
                <h3>RPG Survival Game</h3>
                <p>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT1}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT2}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT3}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT4}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TEXT5}</p>
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
                    <h3>
                      {
                        TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME
                          .VIDEO_TITLE1
                      }
                    </h3>
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
                    <h3>
                      {
                        TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME
                          .VIDEO_TITLE2
                      }
                    </h3>
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
                <p>{TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TEXT1}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TEXT2}</p>
                <p>{TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TEXT3}</p>
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
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <DefaultButton
                        href="https://github.com/Donztt/APS-UNIP-2018---Bomberman-Ecologico"
                        externalLink
                        text={
                          TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO
                            .FONT_CODE
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <DefaultButton
                        href="https://github.com/Donztt/APS-UNIP-2018---Bomberman-Ecologico/releases/download/1.0/Bomberman.jar"
                        externalLink
                        text={
                          TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO
                            .DOWNLOAD_GAME
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default PersonalProjects;
