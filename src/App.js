import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import axios from 'axios';


class App extends Component {

  state = {
    ative : 0,
    url : [],
  };

  onSuggestSelect (suggest) {
    const key = 'rXfAB0lBZ6N5ol8xIGarJsQYNHyxek5NcnE2RN22';
    axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${suggest.location.lng}&lat=${suggest.location.lat}&api_key=${key}`).then((dados)=>{
      this.setState({ url: dados.data.url, ative: 1 })
    });
  }

  render() {
    return (
      <div>
        <Geosuggest
          placeholder="Sua pesquisa"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect.bind(this)}
          onSuggestNoResults={this.onSuggestNoResults}
          />
        {this.state.ative ?
          <img
            alt="imagem via satelite"
            src={this.state.url}
            />
          :
          <div></div>
        }
    </div>
    );
  }
}



export default App;
