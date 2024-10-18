import React, { useEffect, useState } from "react";
import "../CSS/PersonalProjects.css";
import Zoom from "react-reveal/Zoom";
import ImageGallery from "react-image-gallery";
import orderManagmentPhoto1 from "../Photos/orderManagementPhotos/gestão1.PNG";
import orderManagmentPhoto2 from "../Photos/orderManagementPhotos/gestão2.PNG";
import orderManagmentPhoto3 from "../Photos/orderManagementPhotos/gestão3.PNG";
import orderManagmentPhoto4 from "../Photos/orderManagementPhotos/gestão4.PNG";
import orderManagmentPhoto5 from "../Photos/orderManagementPhotos/gestão5.PNG";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import transition from "../Components/Transition.jsx";


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

export function OrderManagmentSys(props) {
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
              <h3>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TITLE}</h3>
              <h5>AngularJs / Java</h5>
              <h5>AngularJs / .NET</h5>
              <Zoom top>
                <div id="Gallery">
                  <ImageGallery
                    items={imageGaleryOrderManagement}
                    showThumbnails={false}
                    showBullets={true}
                  />
                </div>
              </Zoom>
              <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT1}</p>
              <h5>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT2}</h5>
              <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT3}</p>
              <h5>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT4}</h5>
              <p>{TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT.TEXT5}</p>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <DefaultButton
                      href="https://github.com/Donztt/AngularJs---Java-Challenge"
                      externalLink
                      withoutBackground
                      linkStyle
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
                      withoutBackground
                      linkStyle
                      text={
                        TRANSLATION.PERSONAL_PROJECTS.ORDER_MANAGEMENT
                          .FONT_CODE2
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
export default transition(OrderManagmentSys);
