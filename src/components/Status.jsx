import React from "react";
import { CircleFill } from "react-bootstrap-icons";

function Status(props) {
  const { alive, species } = props;

  const statusVars = {
    alive: "#55cc44",
    dead: "#d63d2e",
    unknown: "grey",
  };

  const status = statusVars[alive.toLowerCase()];

  return (
    <div>
      <CircleFill fill={status} />{" "}
      <span style={{ textTransform: "capitalize" }}>
        {alive} - {species}
      </span>
    </div>
  );
}

export default Status;
