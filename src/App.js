import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {
  render() {
    return (
      <div>
        <Input
          title={'Titulo'}
          information={'input vai ficar aqui'}
          />
      </div>
    );
  }
}

class Input extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.information}</h1>
      </div>
    );
  }
}

export default App;
