import React from "react";
import Header from './Header'
import './MainPage.css'
import image from '../images/mainPageImage.jpg'
import Button from '@mui/material/Button';
import About from './AboutPage/About'
import TeamPage from './OurTeam/TeamPage'

function MainPage() {

    return <div>
        <Header />
        <div className="main-page-content">
            <div>
                <h1 className="main-message-heading">Best Way to <span className="green">use</span> your Waste</h1>
                <button className="search-button">Search for best way to Recycle your waste</button>
            </div>
            <img className="main-content-img" src={image} />
        </div>
        <About />
        <TeamPage />
    </div>
}

export default MainPage;