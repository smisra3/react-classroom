import React, { Component } from 'react';
import Heading from './Heading';
import MessageBox from './MessageBox';

class WelcomeAsideSection extends Component {
  render() {
    return (
      <aside className="welcome-aside-section">
        <Heading/>
        <MessageBox />
      </aside>
    );
  }
}

export default WelcomeAsideSection;
