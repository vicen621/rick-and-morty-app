import React from "react";
import CharacterDisplay from "../components/CharacterDisplay";
import { useState, useEffect } from "react";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Navigation from "../components/Navigation";

function Home() {
  const [characters, setData] = useState();

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    var numbers = [];
    while (numbers.length < 8) {
      var r = randomIntFromInterval(1, 826);
      if (numbers.indexOf(r) === -1) numbers.push(r);
    }
    Axios.get(
      `https://rickandmortyapi.com/api/character/${numbers.join(",")}`
    ).then((data) => setData(data.data));
  }, []);

  return (
    <div>
      <Navigation />
      {characters ? (
        <CharacterDisplay data={characters} />
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
}

export default Home;
