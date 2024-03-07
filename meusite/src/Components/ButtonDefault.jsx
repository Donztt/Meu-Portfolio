import React from "react";
import "../CSS/ButtonDefault.css";
import { Link } from "react-router-dom";

function DefaultButton(props) {
  const backgroundStyle = () => {
    return props.withoutBackground
      ? null
      : props.onlyBorderLine
        ? {
            border: "5px solid var(--cor-detalhe)",
            borderRadius: "25px",
          }
        : {
            backgroundColor: "var(--cor-detalhe)",
            borderRadius: "25px",
          };
  };

  const textStyle = () => {
     
    if (props.onlyBorderLine) {
     return {
        color: "var(--cor-detalhe)",
        padding: "5px",
      }
    }
    else if(props.linkStyle){
      return {
        color: "#008AD8",
        padding: "10px",
      };
    }
    else{
      return {
        color: "var(--cor-texto-primario)",
        padding: "10px",
      };
    }
  };

  return (
    <div style={backgroundStyle()}>
      {props.externalLink ? (
        <a
          href={props.href}
          id="homeButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            style={textStyle()}
            className="btn btn-lg btn-block homeButtonText"
          >
            {props.text}
          </span>
        </a>
      ) : (
        <Link to={props.href} id="homeButton">
          <span
            style={textStyle()}
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
