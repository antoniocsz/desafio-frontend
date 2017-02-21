import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

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
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20"
          />
      </div>
    );
  }
}

export default App;
