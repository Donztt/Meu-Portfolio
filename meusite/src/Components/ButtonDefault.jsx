import React from "react";
import "../CSS/ButtonDefault.css";
import { Link } from "react-router-dom";

function DefaultButton(props) {
  return (
    <div
      style={
        props.withoutBackground
          ? null
          : { backgroundColor: "var(--cor-sombra)", borderRadius: "25px" }
      }
    >
      {props.externalLink ? (
        <a
          href={props.href}
          id="homeButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn btn-lg btn-block homeButtonText">
            {props.text}
          </span>
        </a>
      ) : (
        <Link to={props.href} id="homeButton">
          <span className="btn btn-lg btn-block homeButtonText">
            {props.text}
          </span>
        </Link>
      )}
    </div>
  );
}

export default DefaultButton;
