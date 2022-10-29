import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss"

// Credits: https://codepen.io/hkmtqffr/pen/dVPewm
function NotFound() {
  return (
    <div className="NotFound">
      <div className="space"></div>
      <div className="wrapper">
        <div className="img-wrapper">
          <span>44</span>
        </div>
        <p>
          The page you are trying to search has been <br /> moved to another
          universe.
        </p>
        <Link className="Link" to="/">GET ME HOME</Link>
      </div>
    </div>
  );
}

export default NotFound;
