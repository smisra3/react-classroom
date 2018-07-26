import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <ul>
                This is the header
                <li><Link to='/first'>Click to get first component</Link></li>
                <li><Link to='/second'>Click to get Second component</Link></li>
                <li><Link to='/third'>Click to get Third component</Link></li>
            </ul>
        )
    }
}

export default Header;