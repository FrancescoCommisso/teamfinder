import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  state = { test: null };

  componentDidMount() {
    fetch("/test", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="">
            <h1>Team Finder</h1>
            <h2>Find People to Play Sports With You</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
