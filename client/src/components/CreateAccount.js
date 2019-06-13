import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { firebaseApp } from "../firebaseConfig";
const auth = firebaseApp.auth();

class CreateAccount extends Component {
  state = { username: null, password: null, message: null };
  usernameChange = e => {
    this.setState({ username: e.target.value });
  };
  passwordChange = e => {
    this.setState({ password: e.target.value });
  };
  nameChange = e => {
    this.setState({ name: e.target.value });
  };
  confirmChange = e => {
    this.setState({ confirm: e.target.value });
  };

  checkName = () => {
    let message = "Enter Name";
    if (this.state.name.length > 0) {
      return true;
    }
    this.setState({ message: message });
    return false;
  };

  checkEmail = () => {
    console.log("checking email");
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("this.state.email: " + this.state.email);
    if (re.test(String(this.state.username).toLowerCase())) {
      return true;
    } else {
      this.setState({ message: "Email badly formatted" });
      return false;
    }
  };

  checkPassword = () => {
    return true;
  };
  confirmPassword = () => {
    let message = "Passwords Don't Match";

    if (this.state.confirm === this.state.password) return true;
    this.setState({ message: message });
    return false;
  };

  checkInputs = () => {
    if (
      this.checkEmail() &&
      this.checkName() &&
      this.checkPassword() &&
      this.confirmPassword()
    ) {
      this.setState({ message: "" });
      return true;
    }

    return false;
  };

  onSubmit = () => {
    if (this.checkInputs()) {
      console.log("inputs are good");
      auth
        .createUserWithEmailAndPassword(
          this.state.username,
          this.state.password
        )
        .then(user => {
          console.log("User: " + JSON.stringify(user));
          console.log("HMMMMM uid: " + user.user.uid);
          this.addUser(user.user.uid);
        })
        .catch(e => {
          this.setState({ message: e.message });
        });
    }
  };

  addUser = uid => {
    console.log("uid: " + uid);
    let user = { id: uid, name: this.state.name, email: this.state.username };

    fetch("/db/adduser", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => {
      if (res.status === 200) {
        this.setState({ message: "Account Created" });
        this.props.history.push(`/user`);
        console.log("user added to db");
      } else {
        this.setState({ message: "Error Making Account" });

        console.log("error adding user to db");
      }
    });
  };

  render() {
    return (
      <Container className="my-3">
        <Row>
          <Col className="text-left">
            <Form>
              <h2 className="text-center">Create Account</h2>
              <h4>Name</h4>
              <input onChange={this.nameChange} className="form-control" />
              <h4>Email</h4>
              <input onChange={this.usernameChange} className="form-control" />
              <h4 className="my-2">Password</h4>
              <input
                type="new-password"
                onChange={this.passwordChange}
                className="form-control"
              />
              <h4 className="my-2">Confirm Password</h4>
              <input
                type="new-password"
                onChange={this.confirmChange}
                className="form-control"
              />

              <Button onClick={this.onSubmit} className="my-3 btn-block">
                Create Account
              </Button>
            </Form>

            <p className="text-center">{this.state.message}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateAccount;
