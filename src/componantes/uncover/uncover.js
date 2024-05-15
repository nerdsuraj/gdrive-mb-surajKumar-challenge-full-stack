import React from "react";
import images from '../../images/reportDrive.png'
import './uncover.css';

const Uncover = () => {
    return (
        <div className="uncover">
            <h2 className="uncover-heading">See the data Google Drive doesn’t show you</h2>
            <div className="uncover-content">
                <ul className="uncover-list">
                    <li>Personal data (PII)</li>
                    <li>Protected health information (PHI)</li>
                    <li>Payment card data (PCI)</li>
                    <li>Confidential data</li>
                    <li>Specific category data</li>
                    <li>Secrets, keys and passwords</li>
                </ul>
                <div className="uncover-image">
                    <img src={images} alt="Data Google Drive doesn't show" />
                </div>
            </div>
        </div>
    )

}

export default Uncover;