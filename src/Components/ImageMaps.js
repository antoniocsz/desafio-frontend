import React, {Component} from 'react';
import axios from 'axios';

class ImageMaps extends Component {

  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  Api () {
    axios.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.inputValue).then((dados)=>{
      this.setState(
        {data: dados}
      )
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div>
        <h1>{this.Api()}</h1>
      </div>
    );
  }
}

export default ImageMaps;
