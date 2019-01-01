import React from 'react';

export class NameWithHandle extends React.Component {
  render() {
    return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
  }
}