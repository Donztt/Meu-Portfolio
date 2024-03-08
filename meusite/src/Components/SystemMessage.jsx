import React, { useState, useEffect } from "react";
import "../CSS/SystemMessage.css";

const SystemMessage = ({ message, onClose, onShowChange, isError }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  useEffect(() => {
    setShow(onShowChange);
  }, [onShowChange]);

  return show ? (
    <>
      {isError ? (
        <div className="message-box" style={{backgroundColor: "#ff5e5e"}}>
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div className="message-text">{message}</div>
        </div>
      ) : (
        <div className="message-box" style={{backgroundColor: "#87ff83"}}>
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div className="message-text">{message}</div>
        </div>
      )}
    </>
  ) : null;
};

export default SystemMessage;
