import React from 'react';
import './SiteDescription.css';

const SiteDescription = () => {
    return (
        <div className="site-description">
            <div className="text">
                <h1>Feel more confident with every word you say</h1>
                <h2>Conquer through communication</h2>
                <button>Enroll in our Courses</button>
            </div>
            <div className="image">
                <img src="https://minutes.co/wp-content/uploads/2019/07/communication-challenges-1000x600.jpg" alt="" />
            </div>
        </div>
    );
};

export default SiteDescription;