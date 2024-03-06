import React, { useState, useEffect } from "react";
import "../CSS/ProjectPreview.css";
import { Link } from "react-router-dom";

function ProjectPreview(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      console.log(event);
      setMousePosition({
        x: event.pageX,
        y: event.pageY,
      });
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

  const backgroundStyle = (whiteStyle) => {
    return whiteStyle
      ? {
          backgroundColor: "var(--cor-primaria)",
        }
      : {
          backgroundColor: "var(--cor-secundaria)",
        };
  };

  const textStyle = (whiteStyle) => {
    return whiteStyle
      ? {
          color: "var(--cor-texto-secundario)",
        }
      : {
          color: "var(--cor-texto-primario)",
        };
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={props.to} id="ProjectLink">
        <div
          id="ProjectPreviewBackground"
          style={backgroundStyle(props.whiteStyle)}
          className="text-center my-3 py-2"
        >
          <div id="ProjectPreviewTitle">
            <h3 style={textStyle(props.whiteStyle)}>{props.title}</h3>
          </div>
          <p style={textStyle(props.whiteStyle)}>{props.resume}</p>
        </div>
      </Link>
      {isMouseOver && (
        <div
          id="ProjectPreviewHover"
          style={{
            top: mousePosition.y + 10 + "px",
            left: mousePosition.x - 170 + "px",
          }}
        >
          <div id="ProjectPreviewContent">{props.pagePreview}</div>
        </div>
      )}
    </div>
  );
}

export default ProjectPreview;
