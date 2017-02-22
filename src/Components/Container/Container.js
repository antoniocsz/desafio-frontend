import React, {Component} from 'react';
import AutoComplete from './AutoComplete';
import BuildMap from './BuildMap';
import axios from 'axios';

class Container extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      data: [],
    }
  }

  searchAddress (input) {
    this.setState({inputValue: input.target.value})
    if (this.state.inputValue) {
      axios.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + input.target.value+'&libraries=places').then((dados)=>{
        this.setState(
          {data: dados}
          )
        });
      }
    }

  render() {
    return (
      <div>
        <AutoComplete searchAddress={this.searchAddress.bind(this)} />
        <h1>{this.state.inputValue}</h1>
        <BuildMap data={this.state.data}/>
      </div>
    );
  }
}


export default Container;
