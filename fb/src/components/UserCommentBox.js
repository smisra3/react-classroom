import React, { Component } from 'react';
class UserCommentBox extends Component {
  render() {
    return (
      <div className="user-comment-box">
        <textarea placeholder="What's on your mind"></textarea>
        <div className="button-links-wrapper">
          <button type="submit" name="post" value="">Post</button>
          <ul>
            <li><a href="#">Wanna see What's new</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserCommentBox;
