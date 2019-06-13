import React, { Component } from "react";
import "./App.css";
import "./components/Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Helmet from "react-helmet";
import Home from "./components/Home";
import Auth from "./components/Auth";
import CreateMarker from "./components/CreateMarker.js";

import CreateAccount from "./components/CreateAccount.js";
import Profile from "./components/Profile.js";
import { firebaseApp } from "./firebaseConfig";
const auth = firebaseApp.auth();

class App extends Component {
  signOut = () => {
    auth.signOut().then(() => {
      this.props.history.push(`/login`);
    });
  };
  render() {
    let background = "#ffffff";
    return (
      <div className="App">
        <Router>
          <Helmet
            bodyAttributes={{ style: `background-color : ${background}` }}
          >
            <title>Pick-Up League</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <Button className="btn-block" onClick={this.signOut}>
            Sign out
          </Button>
          <Container className="" style={{ maxWidth: "700px" }}>
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Auth} />
                  <Route exact path="/join" component={CreateAccount} />
                  <Route exact path="/user" component={Profile} />
                  <Route exact path="/create" component={CreateMarker} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
