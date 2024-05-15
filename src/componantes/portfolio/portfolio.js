import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="testimonials">
            <h2 className="testimonials-heading">Join Infosec leaders securing their data</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <div className="testimonial-rating">★★★★★</div>
                    <div className="testimonial-date">02/28/2023</div>
                    <p className="testimonial-text">
                        Metomic helps us identify sensitive information in applications where we previously had no or limited visibility.
                    </p>
                    <div className="testimonial-author">
                        <img src="path/to/g2-logo.png" alt="G2 Logo" className="testimonial-logo" />
                        <span>Bud B</span>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-rating">★★★★☆</div>
                    <div className="testimonial-date">02/28/2023</div>
                    <p className="testimonial-text">
                        We use Metomic to uncover sensitive company data and prevent it from being shared or residing in places it shouldn't.
                    </p>
                    <div className="testimonial-author">
                        <img src="path/to/g2-logo.png" alt="G2 Logo" className="testimonial-logo" />
                        <span>Colin O</span>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-rating">★★★★★</div>
                    <div className="testimonial-date">02/28/2023</div>
                    <p className="testimonial-text">
                        We are a Slack and Google shop, and Metomic had out-of-the-box integrations that made implementation a breeze.
                    </p>
                    <div className="testimonial-author">
                        <img src="path/to/g2-logo.png" alt="G2 Logo" className="testimonial-logo" />
                        <span>Tim C</span>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-rating">★★★★★</div>
                    <div className="testimonial-date">02/28/2023</div>
                    <p className="testimonial-text">
                        It's helping us to control any sensitive information being shared across the organisation. It also allows us to restrict users from sharing such information online.
                    </p>
                    <div className="testimonial-author">
                        <img src="path/to/g2-logo.png" alt="G2 Logo" className="testimonial-logo" />
                        <span>Vamshi N</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Portfolio;