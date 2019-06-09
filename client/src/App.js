import React from "react";
import "./App.css";
import "./components/Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";
import Home from "./components/Home";

function App() {
  let background = "#ffffff";
  return (
    <div className="App">
      <Router>
        <Helmet bodyAttributes={{ style: `background-color : ${background}` }}>
          <title>Team finder</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Container className="" style={{ maxWidth: "700px" }}>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
