import React, { Component } from 'react';
import jquery from 'jquery';
window.$ = window.jQuery=jquery;
import tether from 'tether';
window.Tether = tether;

import TwitterFeed from './components/twitterFeed';


class App extends Component {
  render() {
    return (
      <TwitterFeed/>
    );
  }
}

export default App;
