import React, { useState, useEffect } from "react";
import "../CSS/ProjectPreview.css";
import { Link } from "react-router-dom";

function ProjectPreview(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
  }, []);

  const handleMouseEnter = (event) => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={props.to} id="ProjectLink">
        <div id="projectPreviewBackground" className="text-center my-3">
          <h3>{props.title}</h3>
        </div>
      </Link>
      {isMouseOver && (
        <div
          id="ProjectPreviewHover"
          style={{
            top: mousePosition.y + 10 + "px",
            left: mousePosition.x + 10 + "px",
          }}
        >
          <div id="ProjectPreviewContent">{props.pagePreview}</div>
        </div>
      )}
    </div>
  );
}

export default ProjectPreview;
