import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-section">
                <h1>About Us </h1>
                <p>We are some passionate people about learning and teaching English.</p>
                <p>For instance, if a student is struggling with counting but they love building, a teacher might have them count blocks as they build.</p>
            </div>

            <h2 style={{textAlign:"center"}}>Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Jane" style={{width:"100%"}} />
                        <div className="container">
                            <h2>Tim Ferris</h2>
                            <p className="title">CEO &amp; Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="Mike" style={{width:"100%"}} />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="John" style={{width:"100%"}} />
                        <div className="container">
                            <h2>John Doe</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;