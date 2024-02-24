import React from "react";
import "../CSS/ToolTipDefault.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ToolTipDefault(props) {
  return (
    <div id="tooltip" className="my-3">
      <h2>
        <div id="tooltiptext">
          <p>{props.text}</p>
          <p style={{ top: 80 }}>{`${props.percentage}%`}</p>
          <CircularProgressbar
            value={props.percentage}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              pathTransitionDuration: 2,
              strokeLinecap: "butt",
              pathColor: `red`,
              trailColor: "#220404",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div id="tooltipIcon">{props.icon}</div>
      </h2>
    </div>
  );
}

export default ToolTipDefault;
