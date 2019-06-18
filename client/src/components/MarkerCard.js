import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MarkerCard extends Component {
  render() {
    return (
      <Container className="border rounded my-2">
        <Row>
          <Col>
            <p>{this.props.sport}</p>
          </Col>
          <Col>
            <p>{this.props.description}</p>
          </Col>

          <Col>
            <p>{this.props.location}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-wrap">{this.props.user}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MarkerCard;
