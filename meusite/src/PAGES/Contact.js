import React, { useState, useEffect } from "react";
import "../CSS/Contacts.css";
import { Translations } from "../Components/Translations.js";
import transition from "../Components/Transition.jsx";
import DefaultButton from "../Components/ButtonDefault.jsx";
import emailjs from "@emailjs/browser";
import CurriculumPopup from "../Components/CurriculumPopUp";
import SystemMessage from "../Components/SystemMessage";

function Contacts() {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const [systemMessage, setSystemMessage] = useState({
    messageText: "",
    showMessage: false,
    isError: false,
  });

  let TRANSLATION = Translations(language);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_caejrxg",
        "template_0afpbuc",
        e.target,
        "6-Wk5jjtTpojQrNpp"
      )
      .then(() => {
        setSystemMessage({
          messageText: TRANSLATION.CONTACTS.SUCESS_SEND_EMAIL,
          showMessage: true,
          isError: false,
        });

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        setSystemMessage({
          messageText: TRANSLATION.CONTACTS.ERROR_SEND_EMAIL,
          showMessage: true,
          isError: true,
        });
      });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    window.addEventListener("storageLanguage", () => {
      setLanguage(localStorage.getItem("language"));
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="ContactsContentBackground">
      <div id="Contacts-Content">
        <div className="container">
          <div id="ContactData">
            <h3>{TRANSLATION.CONTACTS.TITLE}</h3>
            <div className="row">
              <div className="col m-5">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <input
                      placeholder={TRANSLATION.CONTACTS.PLACEHOLDER_NAME}
                      type="text"
                      required
                      value={name}
                      name="from_name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row mb-3">
                    <input
                      type="email"
                      required
                      placeholder={TRANSLATION.CONTACTS.PLACEHOLDER_EMAIL}
                      value={email}
                      name="email_from"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row mb-3">
                    <textarea
                      value={message}
                      required
                      placeholder={TRANSLATION.CONTACTS.PLACEHOLDER_MESSAGE}
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button type="submit">
                    {TRANSLATION.CONTACTS.SEND_EMAIL}
                  </button>
                </form>
              </div>
              <div className="col m-5">
                <div className="row">
                  <h2>{TRANSLATION.CONTACTS.CONTACTS}</h2>
                  <ul>
                    <li>donizettioliveirajr@gmail.com</li>
                    <li>+55 (16)996455191</li>
                  </ul>
                </div>
                <div className="row">
                  <h2>{TRANSLATION.CONTACTS.BASED_IN}</h2>
                  <ul>
                    <li>São Paulo</li>
                    <li>Araraquara</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="downloadCurriculum" className="p-4">
              <DefaultButton
                onClick={() => setPopupVisible(true)}
                linkStyle
                withoutBackground
                text={TRANSLATION.CONTACTS.DOWNLOAD_CURRICULUM}
              />
            </div>
          </div>
        </div>
      </div>
      <CurriculumPopup popupVisible={popupVisible} onClose={closePopup} />
      <SystemMessage
        message={systemMessage.messageText}
        onClose={() =>
          setSystemMessage({ ...systemMessage, showMessage: false })
        }
        onShowChange={systemMessage.showMessage}
        isError={systemMessage.isError}
      />
    </div>
  );
}
export default transition(Contacts);
