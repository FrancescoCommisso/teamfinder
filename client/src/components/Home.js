import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

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

  login = () => {
    this.props.history.push(`/login`);
  };
  SignUp = () => {
    this.props.history.push(`/join`);
  };

  render() {
    return (
      <Container className="my-3">
        <Row>
          <Col className="">
            <h2>Pick-Up League</h2>
            <p>Find pick-up games near you</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.login} className="btn-block">
              Login
            </Button>
          </Col>
          <Col>
            <Button onClick={this.SignUp} className="btn-block">
              Sign up
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
