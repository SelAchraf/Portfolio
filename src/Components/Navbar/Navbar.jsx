import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

class Navbar extends Component {    
    Show_nav = () => {
        const items = document.querySelector('.items');
        const open = document.querySelector('.open_menu_icon');
        const close = document.querySelector('.close_menu_icon');        
        items.classList.toggle('show_menu');
        open.classList.remove('show_icon');
        close.classList.toggle('show_icon');
    };

    hide_nav = () => {
        const items = document.querySelector('.items');
        const open = document.querySelector('.open_menu_icon');
        const close = document.querySelector('.close_menu_icon');        
        items.classList.remove('show_menu');
        open.classList.toggle('show_icon');
        close.classList.remove('show_icon');
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
                <FontAwesomeIcon icon={faBars} className='open_menu_icon show_icon' onClick={this.Show_nav}/>
                <FontAwesomeIcon icon={faX} className='close_menu_icon' onClick={this.hide_nav}/>
            </nav>
        );
    }
}

export default Navbar;
