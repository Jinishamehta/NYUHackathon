import React from "react";
import ReactLogo from './logo_file/zero_waste.svg'

import './Header.css';

function Header() {
    
    return <div className="main-page">
       <img className="logo" src={ReactLogo} alt='logo' />
       <div className="main-page-content">
           <h1>Best Way to <span className="green">use</span> your Waste</h1>
       </div>
    </div>
}

export default Header;