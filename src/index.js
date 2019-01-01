import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Tweet } from './components/tweet';

class App extends Component {
  render() {
    return (
      <Tweet />
    );
  }
}

render(<App />, document.getElementById('root'));
