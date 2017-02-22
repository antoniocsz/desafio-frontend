import React, {Component} from 'react';

class AutoComplete extends Component {
  render() {
    return (
      <div>
          <input placeholder="Buscar Endereço" onChange={this.props.searchAddress} />
      </div>
    );
  }
}
export default AutoComplete;
