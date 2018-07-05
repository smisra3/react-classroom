import React, { Component } from 'react';
import UserCommentBox from './UserCommentBox';

class UserActivityContainer extends Component {
  render() {
    return (
      <div className="user-activity-container">
        <UserCommentBox/>
      </div>
    );
  }
}

export default UserActivityContainer;
