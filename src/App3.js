import React, { PropTypes, Component } from 'react';
import Geosuggest from 'react-geosuggest';
import GoogleMap from 'react-google-map';

import styles from "./index.css"


class App extends Component {

  onFocus () {
    console.log('onFocus');
  }


  onBlur (value) {
    console.log('onBlur', value);
  }


  onChange (value) {
    console.log('input changes to :' + value);
  }


  onSuggestSelect (suggest) {
    console.log(suggest);
  }


  onSuggestNoResults (userInput) {
    console.log('onSuggestNoResults for :' + userInput);
  }

  render() {
    return (
      <div>
        <Geosuggest
          placeholder="Sua pesquisa"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
          />

      </div>
    );
  }
}

export default App;
