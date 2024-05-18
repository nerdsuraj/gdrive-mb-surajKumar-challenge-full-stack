import React from 'react';
import './footer.css';
import logo1 from '../../images/logo1.jpg';
import logo2 from '../../images/logo2.jpg';
import logo3 from '../../images/logo3.png';
import {Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={logo1} alt="Metomic Logo" />
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#about-us">About us</a></li>
                            <li><a href="#contact-us">Contact us</a></li>
                            <li>
                                <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
                                <a href="#youtube"><i className="fab fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Integrations</h4>
                        <ul>
                            <li><a href="#google-drive">Google Drive</a></li>
                            <li><a href="#slack">Slack</a></li>
                            <li><a href="#jira">Jira</a></li>
                            <li><a href="#teams">Teams</a></li>
                            <li><a href="#zendesk">Zendesk</a></li>
                            <li><a href="#github">GitHub</a></li>
                            <li><a href="#chatgpt">ChatGPT</a></li>
                            <li><a href="#notion">Notion</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#data-discovery">Data Discovery</a></li>
                            <li><a href="#data-loss-prevention">Data Loss Prevention</a></li>
                            <li><a href="#access-controls">Access Controls</a></li>
                            <li><a href="#dspm-tool">DSPM Tool</a></li>
                            <li><a href="#human-firewall">Human Firewall</a></li>
                            <li><a href="#insider-threat">Insider Threat</a></li>
                            <li><a href="#compliance">Compliance</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#guides">Guides</a></li>
                            <li><a href="#whitepapers">Whitepapers & Reports</a></li>
                            <li><a href="#blogs">Blogs</a></li>
                            <li><a href="#press">Press</a></li>
                            <li><a href="#videos">Videos</a></li>
                            <li><a href="#product">Product</a></li>
                            <li><a href="#email-subscription">Email Subscription Management Centre</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-promo">
                    <h3>Check if your Google Drive is leaking sensitive data</h3>
                    <Link to="/dashboard">
                    <button className="footer-btn">Run a free scan</button>
                    </Link>
                </div>
                <div className="footer-certifications">
                    <img src={logo1} alt="Certification 1" />
                    <img src={logo2} alt="Certification 2" />
                    <img src={logo3} alt="Certification 3" />
                </div>
            </div>
            <div className="footer-legal">
                <p>&copy; Metomic 2024</p>
                <p><a href="#terms">Terms & conditions</a> | <a href="#privacy">Privacy Policy</a></p>
            </div>
        </footer>
    );
};

export default Footer;