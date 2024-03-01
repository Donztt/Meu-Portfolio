import React, { Suspense, useEffect, useState } from "react";
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

function RPGSurvivalGame(props) {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  let TRANSLATION = Translations(language);

  useEffect(() => {
    window.addEventListener("storageLanguage", () => {
      setLanguage(localStorage.getItem("language"));
    });
  }, []);

  return (
    <div>
      <NavBar notShow={props.notShowLayout} />
      <div id="PersonalContentBackground">
        <div id="Personal-Content">
          <div className="container-md">
            <div id="Project">
              <h3>{TRANSLATION.PERSONAL_PROJECTS.RPG_SURVIVAL_GAME.TITLE}</h3>
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
              {props.notShowLayout ? null : <Canvas3dModels />}
            </div>
          </div>
        </div>
      </div>
      <Footer notShow={props.notShowLayout} />
    </div>
  );
}
export default RPGSurvivalGame;
