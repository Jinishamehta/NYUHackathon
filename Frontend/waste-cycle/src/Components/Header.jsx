import React from "react";
import ReactLogo from './logo_file/logoZeroWaste.svg'

import './Header.css';

function Header() {
    
    return <div className="header">
        <img className="logo" src={ReactLogo} alt='logo' />
    </div>
}

export default Header;