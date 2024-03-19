import React, { Component } from 'react';
import './Team.css';
import enData from '../languages/en.json';
import noData from '../languages/no.json';
import { NavItem } from 'reactstrap';
class Team extends Component {
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

        const Bildet = () => (
            <div className="bilde-seksjon-img">
                <img src="/index-bildet.jpg" alt="" className="img-style" />>
            </div>
        );


        return (
            <>
                <div className='aboutIs_box'>
                    <div className='aboutUs_box_hero'>
                        <div className='aboutUs_left'>
                            <h1>{languageData.home} </h1>
                            <p>
                                {languageData.about_us_text}
                            </p>
                        </div>
                        <div>
                            <div className="bilde-seksjon">
                                <Bildet />
                            </div>
                        </div>
                    </div>

                    <div className='aboutUs_box_hero'>
                        <div className='aboutUs_left'>
                            <div className="bilde-seksjon">
                                <Bildet />
                            </div>
                        </div>
                        <div>
                            <h1>{languageData.history}</h1>
                            <p>
                                {languageData.history_text}
                            </p>
                        </div>
                    </div>
                </div>

                <section className="section-white">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title">
                                {languageData.the_team_behind}
                            </h2>
                            <p className="section-subtitle"> {languageData.message} </p>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="team-item">
                                    <img src="/Moosa.png" className="team-img" alt="pic" />
                                    <h3>Moosa Ali Rashid</h3>
                                    <div className="team-info">
                                        <p>{languageData.chartered_accountant}</p>
                                        <p>{languageData.about_mosa}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="team-item">
                                    <img src="/Naila.png" className="team-img" alt="pic" />
                                    <h3>Naila Sohail Khokhar</h3>
                                    <div className="team-info">
                                        <p>{languageData.chartered_accountant}</p>
                                        <p>{languageData.about_mosa}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="team-item">
                                    <img src="/Naila.png" className="team-img" alt="pic" />
                                    <h3>Haseeb Talib</h3>
                                    <div className="team-info">
                                        <p>{languageData.accountant}</p>
                                        <p>{languageData.about_mosa}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-item">
                                    <img src="/Naila.png" className="team-img" alt="pic" />
                                    <h3>Ibrahim Mughdal</h3>
                                    <div className="team-info">
                                        <p>{languageData.accountant}</p>
                                        <p>{languageData.about_mosa}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-item">
                                    <img src="/Naila.png" className="team-img" alt="pic" />
                                    <h3>Asad Haider Khan</h3>
                                    <div className="team-info">
                                        <p>{languageData.accountant}</p>
                                        <p>{languageData.about_mosa}</p>
                                    </div>
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

            </>
        );
    }
}

export default Team;