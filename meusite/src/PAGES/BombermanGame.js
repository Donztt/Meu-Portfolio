import React, { useState, useEffect } from "react";
import "../CSS/PersonalProjects.css";
import Zoom from "react-reveal/Zoom";
import ImageGallery from "react-image-gallery";
import Image1Bomberman from "../Photos/GameImages/bombermanecologico.png";
import Image2Bomberman from "../Photos/GameImages/bombermanecologico2.png";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import transition from "../Components/Transition.jsx"

const imageGalleryBomberman = [
  {
    original: Image1Bomberman,
  },
  {
    original: Image2Bomberman,
  },
];

export function BombermanGame(props) {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  let TRANSLATION = Translations(language);

  useEffect(() => {
    window.addEventListener("storageLanguage", () => {
      setLanguage(localStorage.getItem("language"));
    });
  }, []);

  useEffect(() =>{
    if (!props.disableScrollTop) {
      window.scrollTo(0, 0);
    }
  });

  return (
    <div>
      <div id="PersonalContentBackground">
        <div id="Personal-Content">
          <div className="container-md">
            <div id="Project">
              <h3>{TRANSLATION.PERSONAL_PROJECTS.BOMBERMAN_ECOLOGICO.TITLE}</h3>
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
    </div>
  );
}
export default transition(BombermanGame);
