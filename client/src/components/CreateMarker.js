import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { firebaseApp } from "../firebaseConfig";
const auth = firebaseApp.auth();

class CreateMarker extends Component {
  state = { sport: null, location: null, description: null, message: "" };

  componentDidMount() {
    this.setState({ user: auth.currentUser.uid });
  }

  sportChange = e => {
    this.setState({ sport: e.target.value });
  };
  locationChange = e => {
    this.setState({ location: e.target.value });
  };

  descriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  validateMarker = () => {
    if (
      this.state.sport != null &&
      this.state.location != null &&
      this.state.description != null
    ) {
      return true;
    } else {
      this.setState({ message: "Fill in all fields" });
    }
  };

  submit = () => {
    let marker = {
      location: this.state.location,
      sport: this.state.sport,
      description: this.state.description,
      user: this.state.user
    };
    if (this.validateMarker()) {
      fetch("/db/addmarker", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(marker)
      }).then(res => {
        if (res.status === 200) {
          console.log("Marker Added");
          this.setState({ message: "Marker Added" });
        } else {
          console.log("Error adding marker", this.state);
          this.setState({ message: "Error Adding Marker" });
        }
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Create Marker</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <form className="text-left">
              <h4>Sport</h4>
              <input
                type="text"
                onChange={this.sportChange}
                className="form-control"
              />
              <h4>Location</h4>
              <input
                type="text"
                onChange={this.locationChange}
                className="form-control"
              />
              <h4>Description</h4>
              <textarea
                type="text"
                rows="4"
                onChange={this.descriptionChange}
                className="form-control"
              />
              <Button onClick={this.submit} className="btn-block my-4">
                Submit
              </Button>
            </form>
            <Row>
              <Col>
                <p>{this.state.message}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateMarker;
