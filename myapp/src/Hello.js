import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <h1>{this.props.text}{this.props.number % 2 === 0 ? "!!" : "!!!"}</h1>
        );
    }
}

export default Hello;