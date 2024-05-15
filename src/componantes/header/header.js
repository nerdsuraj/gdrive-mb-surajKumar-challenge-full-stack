import React from 'react';
import './header.css';
import images from '../../images/images.png';
import Portfolio from '../portfolio/portfolio';
import Uncover from '../uncover/uncover';
import GetStarted from '../getstarted/getstarted';
const Header = () => {
    return (
        <div className="app">
            <header className="header">
                <div className="navbar">
                    <div className="logo">
                        <img src={images} alt="Metomic Logo" />
                    </div>
                    <nav className="nav-links">
                        <a href="#platform">Platform</a>
                        <a href="#resources">Resource Centre</a>
                        <a href="#company">Company</a>
                        <a href="#partners">Partners</a>
                        <button className="nav-button">Run free scan</button>
                        <button className="nav-button primary">Book a demo</button>
                    </nav>
                    {/* <img src="https://i.ibb.co/qDjMj8y/image-1.png" alt="image-1" border="0"></img> */}
                </div>
            </header>
            <main className="content">
                <div className="left-panel">
                    <h2>Data Breach Finder</h2>
                    <h3>Check if your Google Drive is leaking sensitive data</h3>
                    <button className="btn">Free Google Drive Risk Report</button>
                    <ul>
                        <li>See how secure your Google Drive account is in seconds</li>
                        <li>Discover who still has access to your files, and who they were created by</li>
                        <li>Find risky files exposed publicly to anyone on the internet</li>
                    </ul>
                    <p>After your scan is completed, we'll delete all collected data and remove our access permissions within 24 hours. We will not read any of your files' content at any time.</p>
                </div>
                <div className="right-panel">
                    <img src="https://i.ibb.co/qDjMj8y/image-1.png" alt="Google Drive Risk Report" className="report-image" />
                </div>
            </main>
            <Portfolio />
            <Uncover />
            <GetStarted />
        </div>
    )
}

export default Header;
