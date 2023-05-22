import React, { useState, useEffect } from "react";
import "../CSS/ButtonDefault.css";
import { Link } from "react-router-dom";

function DefaultButton(props) {
  return (
    <div id="homeButtonBackGround">
        <Link to={props.href} id="homeButton">
        <p className="btn btn-lg btn-block" id="homeButtonText">
            {props.text}
        </p>
        </Link>
    </div>
  );
}

export default DefaultButton;
