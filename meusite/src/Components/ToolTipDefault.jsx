import React from "react";
import "../CSS/ToolTipDefault.css";
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ToolTipDefault(props) {
  return (
    <div id="tooltip">
      <h2>
        <div id="tooltiptext">
          <p>{props.text}</p>
          <p style={{top: 80}}>{`${props.percentage}%`}</p>
          <CircularProgressbar  value={props.percentage} 
          styles={buildStyles({
          rotation: 0,
          pathTransitionDuration: 2,
          pathColor: `red`,
          trailColor: '#220404',
          backgroundColor: '#3e98c7',
        })} />
        </div>
          {props.icon}
      </h2>
  </div>
  );
}

export default ToolTipDefault;
