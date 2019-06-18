import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import AllMarkers from "./AllMarkers";
const AnyReactComponent = ({ text }) => (
  <div className="bg-info">
    <h1 className="text-light">X</h1>
  </div>
);
const AnyReactComponent2 = ({ text }) => (
  <div className="bg-info">
    <h1 className="text-dark">X</h1>
  </div>
);

class Map extends Component {
  state = {};
  static defaultProps = {
    center: {
      lat: 43.799187,
      lng: -79.588894
    },
    zoom: 11
  };
  render() {
    return (
      <Container className="">
        <Row>
          <Col className="" style={{ height: "60vh", width: "100vw" }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={43.799187}
                lng={-79.588894}
                text="My Marker"
              />
              <AnyReactComponent2
                lat={43.803588}
                lng={-79.589464}
                text="My Marker"
              />
            </GoogleMapReact>
          </Col>
        </Row>
        <Row>
          <AllMarkers />
        </Row>
      </Container>
    );
  }
}

export default Map;
