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
                            <h1 className="hero-heading">Har du noe på hjertet?</h1>
                            <p>Vi gjør jobben vår vanskeligere, slik at det er lettere for deg. Vårt dedikerte team er klare for å lytte til dine behov, og gi deg den beste opplevelsen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="main-wrapper">
                    <div className="supports">
                        <div className="support-card first">
                            <img src={phone} className="support-card-image" />
                            <h4>Snakk med oss</h4>
                            <span>Din tilbakemelding er viktig for oss. Vi er klare til å lytte og finne løsninger sammen.</span>
                            <a>+0047 40 05 68 98</a>
                            <h4>Når en er i nød:</h4>
                            <span>.. trenger man litt hjelp fra venner... eller MN Regnskap support. Ikke overtenk... vi er her for deg.</span>
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
                            <a className="btn-common" onlick="SendInn()">Send Inn</a>
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