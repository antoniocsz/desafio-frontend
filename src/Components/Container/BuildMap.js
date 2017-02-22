import React, {Component} from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const divStyle = {
  height: '300px',
  width: '300px',
};


class BuildMap extends Component {

  render() {
    return (
      <div style={divStyle}>
        <SimpleMapExample />
      </div>
    );
  }
}


const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class SimpleMapExample extends Component {

  render() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}

export default BuildMap;
