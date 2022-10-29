import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Navigation() {
  const [search, setSearch] = useState();
  const [searchType, setSearchType] = useState("name");
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Rick and Morty App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link as={Link} to="/characters">
              Characters
            </Nav.Link>
          </Nav>

          <Form
            className="d-flex"
            onSubmit={() => {
              navigate(`/characters/${searchType}/${search.replace(" ", "+")}`);
            }}
          >
            <ButtonGroup>
              <ToggleButton
                key="id"
                id="id"
                type="radio"
                value="id"
                checked={searchType === "id"}
                onChange={(e) => setSearchType(e.currentTarget.value)}
              >
                ID
              </ToggleButton>
              <ToggleButton
                key="name"
                id="name"
                type="radio"
                value="name"
                checked={searchType === "name"}
                onChange={(e) => setSearchType(e.currentTarget.value)}
              >
                Name
              </ToggleButton>
            </ButtonGroup>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="outline-success"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
