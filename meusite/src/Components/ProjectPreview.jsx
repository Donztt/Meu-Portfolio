import React, { useState, useEffect } from "react";
import "../CSS/ProjectPreview.css";
import { Link } from "react-router-dom";

function ProjectPreview(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mousePosition, setMousePosition] = useState({});

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setMousePosition(event);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleMouseEnter = (event) => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const backgroundStyle = () => {
    return props.whiteStyle
      ? {
          backgroundColor: "var(--cor-primaria)",
        }
      : {
          backgroundColor: "var(--cor-secundaria)",
        };
  };

  const textStyle = () => {
    return props.whiteStyle
      ? {
          color: "var(--cor-texto-secundario)",
        }
      : {
          color: "var(--cor-texto-primario)",
        };
  };

  const mousePositionStyle = () => {
    return props.usePagePosition
      ? {
          top: mousePosition.pageY - 70 + "px",
          left: mousePosition.pageX - 170 + "px",
        }
      : {
          top: mousePosition.clientY + 10 + "px",
          left: mousePosition.clientX - 170 + "px",
        };
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={props.to} id="ProjectLink">
        <div
          id="ProjectPreviewBackground"
          style={backgroundStyle()}
          className="text-center my-3"
        >
          <div id="ProjectPreviewTitle">
            <h3 style={textStyle()}>{props.title}</h3>
          </div>
          <p style={textStyle()}>{props.resume}</p>
        </div>
      </Link>
      {isMouseOver && (
        <div id="ProjectPreviewHover" style={mousePositionStyle()}>
          <div id="ProjectPreviewContent">{props.pagePreview}</div>
        </div>
      )}
    </div>
  );
}

export default ProjectPreview;
