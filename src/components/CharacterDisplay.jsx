import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterCard from "./CharacterCard";
import Character from "./character/Character";

function CharacterDisplay({ data }) {
  return (
    <div className="mt-4">
      {Array.isArray(data) ? (
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
          {data.map((char) => (
            <Col>
              <CharacterCard char={char} />
            </Col>
          ))}
        </Row>
      ) : (
        <Character char={data} />
      )}
    </div>
  );
}

export default CharacterDisplay;
