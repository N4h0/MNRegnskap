import React from 'react';
import map from '../assets/map.png';
import phone from '../assets/phone.png';
import message from '../assets/message.png';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-us-page">
            <section className="hero-content">
                <div className="main-wrapper">
                    <div className="hero-body">
                        <div className="hero-text">
                            <h1 className="hero-heading">Get in touch</h1>
                            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="main-wrapper">
                    <div className="supports">
                        <div className="support-card first">
                            <img src={phone} className="support-card-image" />
                            <h4>Talk to Sales</h4>
                            <span>Interested in MNRegnskap's software? Just pick up the phone to chat with a member of our sales team.</span>
                            <a>+1 857 829 5060</a>
                            <h4>Contact Customer Support</h4>
                            <span>Sometimes you need a little help from your friends. Or a MNRegnskap support rep. Don't worry... we're here for you.</span>
                        </div>
                        <div className="support-card second">
                            <img src={message} className="support-card-image" />
                            <h4>Request a consultation</h4>
                            <span>Concentrate on what youre good at - We take care of the accounts! Contact us for a no-obligation conversation.</span>
                            <div className="form-input">
                                <input type="text" className="input-name" placeholder="name" />
                            </div>
                            <div className="form-input">
                                <input type="email" className="input-email" placeholder="email" />
                            </div>
                            <div className="form-input">
                                <textarea placeholder="First type your organization number and then type your message*" />
                            </div>
                            <a className="btn-common">Submit</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="connect">
                <div className="main-wrapper">
                    <div className="connect-title">
                        <h2 className="title">Connect with one of our global offices</h2>
                    </div>
                    <div className="connect-main">
                        <div className="connect-body">
                            <div className="map-box">
                                <img src={map} alt="Global Offices Map"></img>
                            </div>
                            <div className="connect-detail">
                                <div className="detail-item">
                                    <h3>Headquarters</h3>
                                    <span>2 Canal Park</span>
                                    <span>Cambridge, MA 02141</span>
                                    <span>United States</span>
                                </div>
                                <div className="detail-item">
                                    <h5>Phone / Fax</h5>
                                    <span>+ 1 888 MNRegnskap</span>
                                    <span>(+1 888 482 7768)</span>
                                </div>
                                <div className="detail-item fax">
                                    <span className="">Fax:</span>
                                    <span> +1 617 812 5820</span>
                                </div>
                                <h5>Press / Media / Blogger Information</h5>
                                <a>Visit our Newsroom for contact info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;