import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

class Navbar extends Component {    
    toggleItems = () => {
        const items = document.querySelector('.items');
        items.classList.toggle('active');
    };

    render() {
        return (
            <nav>
                <img className='Logo' src='SHITO_LOGO.png' alt='Logo'></img>
                <ul className='items'>
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
                <FontAwesomeIcon icon={faBars} className='menu_icon' onClick={this.toggleItems}/>
                
            </nav>
        );
    }
}

export default Navbar;
