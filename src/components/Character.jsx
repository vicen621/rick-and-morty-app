import React from "react";
import { Col, Container, Image, Ratio, Row } from "react-bootstrap";

function Character({ char }) {
  return (
    <Container>
      <Row>
        <Col>
        <Ratio aspect="16x9">
          <Image src={char.image} fluid />
        </Ratio>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Character;
