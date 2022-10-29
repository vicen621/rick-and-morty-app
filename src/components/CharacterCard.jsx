import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Status from "./Status";

function CharacterCard({ char }) {
  return (
    <Card bg="dark" text="light" text-align="left">
      <Row>
        <Col md={5}>
          <Card.Img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={char.image}
          />
        </Col>
        <Col md={7}>
          <Card.Body style={{ textAlign: "left" }}>
            <Card.Title>{char.name}</Card.Title>
            <Card.Text>
              <Status alive={char.status} species={char.species} />
            </Card.Text>
            <Card.Text style={{ color: "#9e9e9e" }}>
              <div>
                Last seen in:
                <span style={{ display: "block", color: "white" }}>
                  {char.location.name}
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CharacterCard;
