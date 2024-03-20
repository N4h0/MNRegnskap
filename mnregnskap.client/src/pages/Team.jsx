import React from 'react';
import './Team.css';


function Team() {

    const Bildet = () => (

        <div className="bilde-seksjon-img">
            <img src="/index-bildet.jpg" alt="" className="img-style" />
            <div className="tekst-i-midten">
                {/*<h1>M&N</h1>
                <h1>REGNSKAP</h1>
                <h4>Vi tar vare p&aring; regnskapet!</h4>
                <div className="bildet-seksjon-knapp">
                    <button className="mer-info-knapp">MER INFO</button>
                </div>*/}
            </div>
        </div>

    );

    let message = "Trenger inspirasjon til hva jeg skal skrive her"
    return (
        <>
            <div className='aboutIs_box'>
                <div className='aboutUs_box_hero'>
                    <div className='aboutUs_box_hero_left'>
                        <h1>About Us </h1>
                        <p>
                            M&N Accounting is a personal accounting firm that communicates
                            well with its clients, knows their financial history and condition,
                            and provides services that optimize the client’s financial situation.
                            Our goal is to be an important contributor to our clients as an accountant and advisor.
                            We have a broad network of contacts in the field of auditing and legal services.
                        </p>
                    </div>
                    <div className='aboutUs_box_hero_right'>
                        <div className="bilde-seksjon">
                            <Bildet />
                        </div>
     
                    </div>
                </div>

      
                <div className='aboutUs_box_hero'>
                    <div className='aboutUs_box_hero_left'>
                        <div className="bilde-seksjon">
                            <Bildet />
                        </div>

                    </div>
                        <div className='aboutUs_box_hero_right'>
                            <h1>Historie.</h1>
                            <p>
                            M&N Accounting is located centrally on Frogner.
                            We have extensive experience in accounting in most industries.
                            We provide accounting services for customers in Oslo and the rest of Norway.
                            We have employees with a high education and vast experience.
                            </p>
                        </div>
                    </div>

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
            
        </>
    )
}

export default Team;