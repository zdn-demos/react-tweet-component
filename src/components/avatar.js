import React from 'react';

export class Avatar extends React.Component {
  render() {
    return(
      <img
        src="https://www.gravatar.com/avatar/nothing"
        className="avatar"
        alt="avatar"
      />
    );
  }
}