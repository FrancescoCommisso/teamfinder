import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { firebaseApp } from "../firebaseConfig";
const auth = firebaseApp.auth();

class Profile extends Component {
  state = {};
  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    let b = { uid: auth.currentUser.uid };

    fetch("/db/getuserbyuid", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(b)
    }).then(res => {
      if (res.status === 200) {
        res.json().then(obj => {
          this.setState(obj);
          console.log("user found");
        });
      } else {
        console.log("user not found");
      }
    });
  };

  render() {
    return (
      <Container className="text-left">
        <Row>
          <Col>
            <h1>Profile</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Name: {this.state.name} </h4>
            <h4>Email: {this.state.email} </h4>
            <h4>Address:{this.state.address} </h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
