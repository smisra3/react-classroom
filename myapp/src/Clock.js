import React, { Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <p id="timer">{new Date().toLocaleString()}</p>
        );
    }
}
export default Clock