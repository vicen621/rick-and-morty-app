import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CharacterDisplay from "../components/CharacterDisplay";
import { Spinner } from "react-bootstrap";
import Navigation from "../components/Navigation";

function Search() {
  const [char, setChar] = useState();
  const [error, setError] = useState();
  let { searchType, search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isId = searchType === "id";
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${
          isId ? search : `?name=${search.toLowerCase().replace(" ", "+")}`
        }`
      )
      .then((data) => setChar(isId ? data.data : data.data.results))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          navigate("/404");
        }
      });
  }, [searchType, search]);

  return (
    <div>
      <Navigation />
      {char ? <CharacterDisplay data={char} /> : <Spinner animation="border" />}
    </div>
  );
}

export default Search;
