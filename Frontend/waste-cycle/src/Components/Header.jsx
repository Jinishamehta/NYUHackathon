import React from "react";
import ReactLogo from './logo_file/logoZeroWaste.svg'

import './Header.css';

function Header() {
    
    return <div className="header">
        <img className="logo" src={ReactLogo} alt='logo' />
        <nav className="navigation-bar">
            <ul>
                <li className="nav-item"><a href="">About Us</a></li>
                <li className="nav-item"><a href="">What we Do</a></li>
                <li className="nav-item"><a href="">Contact Us</a></li>
                <li className="nav-item"><a href="">Our Team</a></li>
            </ul>
        </nav>
    </div>
}

export default Header;