import React from 'react';
import {NameWithHandle} from './NameWithHandle';
import {Message} from './message';
import {Avatar} from './avatar';

/* DEFINE BUTTON COMPONENTS */
const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);
const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

/* DEFINE TWEET COMPONENT */
export class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <Avatar />
        <div className="content">
          <NameWithHandle name={this.props.name} handle={this.props.handle} /><Time value={this.props.time} />
          <Message content={this.props.message} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    );
  }
}