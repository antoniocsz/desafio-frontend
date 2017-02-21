import React, {Component} from 'react';

class SearchAddress extends Component {
  render() {
    return (
      <div className="Search">
        <input type='text' placeholder="Buscar Endereço" onChange={this.props.buscarSobre} />
        <button>OK</button>
      </div>
    );
  }
}

export default SearchAddress;
