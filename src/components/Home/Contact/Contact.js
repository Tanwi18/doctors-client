import React from 'react';
import './Contact.css';
import background from '../../../images/background.png';

const Contact = () => {
    return (
        <section className="contact " id="contact">
            <div className="contact-container  d-flex justify-content-center">
                <div>
                    <div className="mb-3 pb-3 pt-5">
                    <h6 style={{ color: '#1cc7c1' }}>CONTACT US</h6>
                    <h2 className="text-white">Always Connect With Us</h2>
                    </div>
                    <div className="mt-3">
                        <input type="text" placeholder="Enter your email*" className="input"></input>
                        <br />
                        <input type="text" placeholder="subject*" className="input"></input>
                        <br />
                        <input type="text" placeholder="Your message" className="message input"></input>
                    </div>
                    <br />
                    <button type="submit" className="button offset-4">Submit</button>
           </div>
            </div>
        </section>
    );
};

export default Contact;