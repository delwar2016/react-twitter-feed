import React, { Component } from 'react';
import jquery from 'jquery';
window.$ = window.jQuery=jquery;
import tether from 'tether';
window.Tether = tether;

import TwitterFeedContainer from './components/twitterFeedContainer';


class App extends Component {
  render() {
    return (
      <TwitterFeedContainer/>
    );
  }
}

export default App;
