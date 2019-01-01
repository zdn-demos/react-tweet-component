import React from 'react';

export class NameWithHandle extends React.Component {
  render() {
    return (
    <span className="name-with-handle">
        <span className="name">{this.props.name}</span>
        <span className="handle">@{this.props.handle}</span>
    </span>
  );
  }
}