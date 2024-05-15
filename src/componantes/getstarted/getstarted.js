import React from 'react';
import './getstarted.css';

const GetStarted = () => {
    return (
        <div className="get-started">
            <h2 className="get-started-heading">Choose Your Free Google Drive Risk Report</h2>
            <div className="get-started-content">
                <div className="card recommended">
                    <div className="recommended-badge">Recommended</div>
                    <h3>Scan your Google Drive company account</h3>
                    <p>Get a full risk report for your company in minutes.</p>
                    <p>After your scan is completed, we’ll delete all collected data and remove our access permissions within 24 hours. We will not read any of your files’ content at any time.</p>
                    <button className="btn">Free Google Drive Risk Report</button>
                </div>
                <div className="card">
                    <h3>Run a dummy scan using our demo account</h3>
                    <p>Get a sample report using dummy data.</p>
                    <p>See how our scanner detects sensitive data such as Driving licenses, Credit card numbers, and IDs.</p>
                    <button className="btn">Scan our Demo Account</button>
                </div>
                <div className="card">
                    <h3>See all our Metomic features in action. Book a demo.</h3>
                    <p>Let’s see how Metomic can help your business.</p>
                    <p>Request a demo to see how our platform can give you unparalleled visibility and control over your sensitive data.</p>
                    <button className="btn">Book a Demo</button>
                </div>
                <div className="card">
                    <h3>See all our Metomic features in action. Book a demo.</h3>
                    <p>Let’s see how Metomic can help your business.</p>
                    <p>Request a demo to see how our platform can give you unparalleled visibility and control over your sensitive data.</p>
                    <button className="btn">Book a Demo</button>
                </div>
            </div>
        </div>
    )
}


export default GetStarted;

