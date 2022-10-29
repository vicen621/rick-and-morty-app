import React from "react";
import Card from "react-bootstrap/Card";

function EpisodeCard({ episode }) {
  if (!episode) return;

  return (
    <Card bg="dark" text="light" text-align="left">
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>{episode.name}</Card.Title>
        <Card.Text style={{ color: "#9e9e9e" }}>
          <div>
            Air Date:
            <span style={{ display: "block", color: "white" }}>
              {episode.air_date}
            </span>
          </div>
        </Card.Text>
        <Card.Text style={{ color: "#9e9e9e" }}>
          <div>
            Episode:
            <span style={{ display: "block", color: "white" }}>
              {episode.episode}
            </span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EpisodeCard;
