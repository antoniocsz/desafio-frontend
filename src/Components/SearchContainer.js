import React, {Component} from 'react';
import SearchAddress from './SearchAddress';
import ImageMaps from './ImageMaps';


class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  buscarSobre(input){
    this.setState({ inputValue: input.target.value })
  }

  render() {
    return (
      <div>
        <h1>Buscador de Endereços</h1>
        <SearchAddress buscarSobre={this.buscarSobre.bind(this)} />
        <ImageMaps inputValue={this.state.inputValue.toLowerCase()} />
      </div>
    );
  }
}

export default AppContainer;
