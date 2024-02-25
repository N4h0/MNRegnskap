import React from 'react';
import './Team.css';


function Team() {
    const Bildet = () => (

        <div className="bilde-seksjon-img">
            <img src="/index-bildet.jpg" alt="" className="img-style" />
            <div className="tekst-i-midten">
                <h1>Meet the team</h1>
                <h1>Skal endre bildet :P</h1>
            </div>
        </div>

    );
    let message = "Trenger inspirasjon til hva jeg skal skrive her"
    return (
        <>
            <div className="bilde-seksjon">
                <Bildet />
            </div>
            <section className="section-white">

                <div className="container">
                    <div className="row">

                        <h2 className="section-title">
                            The team behind M&N Regnskap
                        </h2>
                        <p className="section-subtitle"> {message} </p>

                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="team-item">
                                <img src="/Moosa.png" className="team-img" alt="pic" />
                                <h3>Moosa Ali Rashid</h3>
                                <div className="team-info">
                                    <p>Chartered accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Naila Sohail Khokhar</h3>
                                <div className="team-info">
                                    <p>Chartered accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
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
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Ibrahim Mughdal</h3>
                                <div className="team-info">
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Asad Haider Khan</h3>
                                <div className="team-info">
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        </> 
        )}

export default Team;