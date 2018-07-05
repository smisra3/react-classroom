import React, { Component } from 'react';
import './App.css';
import WelcomeAsideSection from './components/WelcomeAsideSection';
import UserActivityContainer from './components/UserActivityContainer';
import AdvertisementAsideSection from './components/AdvertisementAsideSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          This is Heading
        </header>
        <div className="App-intro">
          <WelcomeAsideSection />
          <UserActivityContainer />
          <AdvertisementAsideSection />
        </div>
      </div>
    );
  }
}

export default App;
