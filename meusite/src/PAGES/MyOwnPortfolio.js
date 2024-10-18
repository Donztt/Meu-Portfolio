import React, { useState, useEffect } from "react";
import "../CSS/Project.css";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import transition from "../Components/Transition.jsx";
import Zoom from "react-reveal/Zoom";
import ImageGallery from "react-image-gallery";
import Image1 from "../Photos/portfoliumPhotos/ver1.PNG";
import Image2 from "../Photos/portfoliumPhotos/ver2.PNG";
import Image3 from "../Photos/portfoliumPhotos/ver3.PNG";
import Image4 from "../Photos/portfoliumPhotos/ver4.PNG";

export function MyOwnPortfolio(props) {
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

  const portfoliumImages = [
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
  ];
  

  return (
    <div>
      <div id="PersonalContentBackground">
        <div id="Personal-Content">
          <div className="container-md">
            <div id="Project">
              <h3>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TITLE}</h3>
              <h5>ReactJs</h5>
              <Zoom top>
                <div id="Gallery">
                  <ImageGallery
                    items={portfoliumImages}
                    showThumbnails={false}
                    showBullets={true}
                  />
                </div>
              </Zoom>
              <p>{TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.TEXT2}</p>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <DefaultButton
                      href="https://github.com/Donztt/Meu-Portfolio"
                      externalLink
                      withoutBackground
                      linkStyle
                      text={TRANSLATION.PERSONAL_PROJECTS.PORTFOLIO.FONT_CODE}
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
export default transition(MyOwnPortfolio);
