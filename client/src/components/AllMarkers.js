import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarkerCard from "./MarkerCard";

class AllMarkers extends Component {
  state = { markers: [] };
  componentDidMount() {
    fetch("/db/allmarkers", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.status === 200) {
        res.json().then(state => {
          this.setState(state);
          console.log("markers: ", state);
        });
      } else {
        console.log("Error fetching markers");
      }
    });
  }
  render() {
    return (
      <Container>
        {this.state.markers.map((marker, i) => (
          <MarkerCard
            key={i}
            user={marker.user}
            sport={marker.sport}
            location={marker.location}
            description={marker.description}
          />
        ))}
      </Container>
    );
  }
}

export default AllMarkers;
