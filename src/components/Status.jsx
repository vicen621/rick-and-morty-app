import React from "react";
import { CircleFill } from "react-bootstrap-icons";

function Status({ alive, species, size = "1em" }) {
  const statusVars = {
    alive: "#55cc44",
    dead: "#d63d2e",
    unknown: "grey",
  };

  const status = statusVars[alive?.toLowerCase() || "unknown"];

  return (
    <div>
      <CircleFill fill={status} size={size} />{" "}
      <span id="statusSpan" style={{ textTransform: "capitalize" }}>
        {alive} - {species}
      </span>
    </div>
  );
}

export default Status;
