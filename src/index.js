import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Tweet } from './components/tweet';

class App extends Component {
  render() {
    return (
      <Tweet
        message="This is less than 140 charssss."
        time="3h ago"
        handle="user"
        name="Mr. User Pants"
      />
    );
  }
}

render(<App />, document.getElementById('root'));
