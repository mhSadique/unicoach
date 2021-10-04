import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <h2 className="contact-us" >Contact Us</h2>
            <form className="contact-us-form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Questions</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Questions"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Footer;