import React, { Component } from 'react';


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
        <form>
          <input type="text" />
          <button value="buscar" />
        </form>

        <>
      </div>
    );
  }
}

class Maps extends Component {
  render () {
    return (
      <div>

      </div>
    );
  }
}

export default App;
