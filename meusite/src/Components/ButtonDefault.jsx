import React from "react";
import "../CSS/ButtonDefault.css";
import { Link } from "react-router-dom";

function DefaultButton(props) {
  return (
    <div
      style={
        props.withoutBackground
          ? null
          : props.onlyBorderLine
            ? {
                border: "5px solid var(--cor-detalhe)",
                borderRadius: "25px"
              }
            : {
                backgroundColor: "var(--cor-detalhe)",
                borderRadius: "25px"
              }
      }
    >
      {props.externalLink ? (
        <a
          href={props.href}
          id="homeButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            style={
              props.onlyBorderLine
                ? {
                    color: "var(--cor-detalhe)",
                    padding: "5px",
                  }
                : {
                    color: "var(--cor-texto-primario)",
                    padding: "10px",
                  }
            }
            className="btn btn-lg btn-block homeButtonText"
          >
            {props.text}
          </span>
        </a>
      ) : (
        <Link to={props.href} id="homeButton">
          <span
            style={
              props.onlyBorderLine
                ? {
                    color: "var(--cor-detalhe)",
                    padding: "5px",
                  }
                : {
                    color: "var(--cor-texto-primario)",
                    padding: "10px",
                  }
            }
            className="btn btn-lg btn-block homeButtonText"
          >
            {props.text}
          </span>
        </Link>
      )}
    </div>
  );
}

export default DefaultButton;
