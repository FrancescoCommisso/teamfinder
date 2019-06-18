import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { firebaseApp } from "../firebaseConfig";
const auth = firebaseApp.auth();

class Profile extends Component {
  state = { uid: null };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.getUserData(user.uid);
      } else {
        this.props.history.push("/");
      }
    });
  }

  getUserData = uid => {
    fetch("/db/getuserbyuid", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ uid: uid })
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

  goToMakeMarker = () => {
    this.props.history.push("/create");
  };
  goToMap = () => {
    this.props.history.push("/map");
  };

  render() {
    if (this.state.refresh) {
      this.getUserData();
    }
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
            <h4>Address: {this.state.postalcode} </h4>
            <Button className="btn-block" onClick={this.goToMakeMarker}>
              Create Marker
            </Button>
            <Button className="btn-block" onClick={this.goToMap}>
              Go To Map
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
