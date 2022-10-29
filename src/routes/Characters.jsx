import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterDisplay from "../components/CharacterDisplay";
import Navigation from "../components/Navigation";
import Spinner from "react-bootstrap/Spinner";
function Characters() {
  const [characters, setData] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => setData(data.data.results));
  }, []);

  return (
    <div style={{ backgroundColor: "#3c3f47" }}>
      <Navigation />
      {characters ? (
        <div className="grid-container">
          <CharacterDisplay data={characters} />
        </div>
      ) : (
        <div className="grid-container">
          <Spinner animation="border" />;
        </div>
      )}
    </div>
  );
}

export default Characters;
