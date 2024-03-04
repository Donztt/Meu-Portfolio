import React, {useEffect, useState} from "react";
import "../CSS/PersonalProjects.css";
import Zoom from "react-reveal/Zoom";
import crudReactJsAspNet from "../Videos/CRUDReactJsASPNET.mp4";
import { Translations } from "../Components/Translations.js";
import DefaultButton from "../Components/ButtonDefault.jsx";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import transition from "../Components/Transition.jsx"

function RegisNLoginSys(props){
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  let TRANSLATION = Translations(language);

  useEffect(() => {
    window.addEventListener("storageLanguage", () => {
      setLanguage(localStorage.getItem("language"));
    });
  }, []);

    return (
      <div>
        <div id="PersonalContentBackground">
          <div id="Personal-Content">
            <div className="container-md">
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
            </div>
          </div>
        </div>
      </div>
    );
}
export default transition(RegisNLoginSys);
