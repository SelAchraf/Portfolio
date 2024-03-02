import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <img className='Logo' src='SHITO_LOGO.png' alt='Logo'></img>
                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>About</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>      
                    </li>
                    <li>
                        <a className='menu-item'>Portfolio</a>   
                    </li>
                    <li>
                        <a className='menu-item'>Services</a>      
                    </li>
                    <li>
                        <a className='menu-item'>Contact</a>
                    </li>    
                </ul>
            </nav>
        );
    }
}

export default Navbar;