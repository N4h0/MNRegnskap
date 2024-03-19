import React, { Component } from 'react';
import map from '../assets/map.png';
import phone from '../assets/phone.png';
import message from '../assets/message.png';
import './Contact.css';
import enData from '../languages/en.json';
import noData from '../languages/no.json';
import { NavItem } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en' // Setter standard språk til engelsk
        };
    }

    changeLanguage = (language) => {
        this.setState({ language });
    }

    render() {
        const { language } = this.state;
        const languageData = language === 'en' ? enData : noData;
        return (
            <div className="contact-us-page">
                <section className="hero-content">
                    <div className="main-wrapper">
                        <div className="hero-body">
                            <div className="hero-text">
                                <h1 className="hero-heading">{languageData.anything_on_heart}</h1>
                                <p>{languageData.what_our_team_does}
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
                                <h4>{languageData.talk_to_us}</h4>
                                <span>{languageData.your_feedback}</span>
                                <a>+0047 40 05 68 98</a>
                                <h4>{languageData.when_on_distress}</h4>
                                <span>{languageData.help_from_us}</span>
                            </div>
                            <div className="support-card second">
                                <img src={message} className="support-card-image" />
                                <h4>{languageData.request_a_consultation}</h4>
                                <span>{languageData.concentrate}</span>
                                <div className="form-input">
                                    <input type="text" className="input-name" placeholder="Navn" />
                                </div>
                                <div className="form-input">
                                    <input type="email" className="input-email" placeholder="Epost" />
                                </div>
                                <div className="form-input">
                                    <textarea placeholder="Skriv først organisasjonsnummeret og følg deretter med meldingen" />
                                </div>
                                <a className="btn-common" onClick={() => SendInn()}>{languageData.send}</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="connect">
                    <div className="main-wrapper">
                        <div className="connect-title">
                            <h2 className="title">{languageData.talk_coffee}☕️</h2>
                        </div>
                        <div className="connect-main">
                            <div className="connect-body">
                                <div className="map-box">
                                    <img src={map} alt="Global Offices Map"></img>
                                </div>
                                <div className="connect-detail">
                                    <div className="detail-item">
                                        <h3>{languageData.head_office}</h3>
                                        <span>Vollaveien 20 A</span>
                                        <span>Oslo, 0668</span>
                                        <span>Norge</span>
                                    </div>
                                    <div className="detail-item">
                                        <h5>{languageData.call_us}</h5>
                                        <span>+0047 MNRegnskap</span>
                                        <span>(40 05 68 98)</span>
                                    </div>
                                    <div className="detail-item fax">
                                        <span className="">Addresse:</span>
                                        <span> mn@mnregnskap.no</span>
                                    </div>
                                    <h5>{languageData.organization_number}</h5>
                                    <a>992 720 999</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavItem>
                        <div className="language-selector">
                            <button onClick={() => this.changeLanguage('en')}>English</button>
                            <button onClick={() => this.changeLanguage('no')}>Norsk</button>
                        </div>
                    </NavItem>
                </section>
            </div>
        );
    }
}

export default Contact;