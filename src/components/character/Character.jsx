import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { GenderFemale, GenderMale, PersonCircle } from "react-bootstrap-icons";
import EpisodeCard from "../EpisodeCard";
import Status from "../Status";
import "./Character.scss";

function Character({ char }) {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    const numbers = [];
    char.episode.map((episode) =>
      numbers.push(
        episode.replace("https://rickandmortyapi.com/api/episode/", "")
      )
    );

    axios
      .get(`https://rickandmortyapi.com/api/episode/${numbers.join(",")}`)
      .then((data) => setEpisodes(data.data))
      .catch((error) => {
        if (error.response) console.log(error.response);
      });
  }, []);

  return (
    <Container style={{ color: "#fff" }}>
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
                <Status
                  alive={char.status}
                  species={char.species}
                  type={char.type}
                />
              </Card.Text>
              <Card.Text className="secondary-color">
                {char.type !== "" ? (
                  <span className="block">
                    <PersonCircle fill="#9e9e9e" size="1em" />{" "}
                    <span>{char.type}</span>
                  </span>
                ) : (
                  ""
                )}
              </Card.Text>
              <Card.Text className="secondary-color">
                Gender:{" "}
                {char.gender.toLowerCase() === "male" ? (
                  <GenderMale fill="white" size="1em" />
                ) : (
                  <GenderFemale fill="white" size="1em" />
                )}
              </Card.Text>
              <Card.Text className="secondary-color">
                Origin:
                <span className="block">{char.origin.name}</span>
              </Card.Text>
              <Card.Text className="secondary-color">
                Last seen in:
                <span className="block">{char.location.name}</span>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col></Col>
        </Row>
      </Card>
      <br />
      <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {[].concat(episodes).map((episode) => (
          <Col>
            <EpisodeCard episode={episode} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Character;
