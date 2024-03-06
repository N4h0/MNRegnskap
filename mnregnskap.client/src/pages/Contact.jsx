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
                            <h4>Be om konsultasjon</h4>
                            <span>Konsentrer deg om det du er god på – Vi tar oss av regnskapet!   Ta kontakt med oss for en uforpliktende samtale.</span>
                            <div className="form-input">
                                <input type="text" className="input-name" placeholder="Navn" />
                            </div>
                            <div className="form-input">
                                <input type="email" className="input-email" placeholder="Epost" />
                            </div>
                            <div className="form-input">
                                <textarea placeholder="Skriv først organisasjonsnummeret og følg deretter med meldingen" />
                            </div>
                            <a className="btn-common">Send Inn</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="connect">
                <div className="main-wrapper">
                    <div className="connect-title">
                        <h2 className="title">Skal vi ta det over en kopp kaffe? ☕️</h2>
                    </div>
                    <div className="connect-main">
                        <div className="connect-body">
                            <div className="map-box">
                                <img src={map} alt="Global Offices Map"></img>
                            </div>
                            <div className="connect-detail">
                                <div className="detail-item">
                                    <h3>Hovedkontor</h3>
                                    <span>Vollaveien 20 A</span>
                                    <span>Oslo, 0668</span>
                                    <span>Norge</span>
                                </div>
                                <div className="detail-item">
                                    <h5>Ring oss</h5>
                                    <span>+0047 MNRegnskap</span>
                                    <span>(40 05 68 98)</span>
                                </div>
                                <div className="detail-item fax">
                                    <span className="">Addresse:</span>
                                    <span> mn@mnregnskap.no</span>
                                </div>
                                <h5>Organisasjons nummer:</h5>
                                <a>992 720 999</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;