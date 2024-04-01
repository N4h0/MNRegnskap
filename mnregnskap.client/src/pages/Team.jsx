import './Team.css';


function Team() {

    const Bildet = () => (

        <div className="bilde-seksjon-img">
            <img src="/teambilde.avif" alt="" className="img-style" />
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

        let message = "Bak tallene står vi, din pålitelige partner for økonomisk suksess!"

    return (
        <>
            <div className='aboutIs_box'>
                <div className='aboutUs_box_hero'>
                    <div className='aboutUs_box_hero_left'>
                        <h1>Historien vår </h1>
                        <p>
                        M&N Regnskap har en sentral beliggenhet på Alna og har omfattende erfaring med regnskapsførsel 
                        i ulike bransjer. Vi betjener kunder i Oslo og andre deler av Norge.
                        </p>
                        <p>
                        Vårt team består av høyt 
                        utdannede medarbeidere med lang erfaring innen feltet. Selskapet ble grunnlagt i 2008 av Moosa Ali 
                        Rashid og Naila Sohail Khokhar, begge med utdanning innen revisjon. Med årene har vi vokst i takt med 
                        vårt klientnettverk.
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
                            <h1>Oss</h1>
                            <p>
                            M&N Regnskap har en høy faglig standard og gode rutiner for kvalitetssikring, da vi er oppmerksomme 
                            på at regnskapsføring er forbundet med strenge krav og stramme tidsfrister. Vi tilbyr tjenester fra A 
                            til Å og jobber i dag i stor grad digitalt, men vi tilpasser oss også klientenes ønsker om papirbaserte
                             løsninger. La oss ta oss av regnskapet, slik at du kan fokusere på det du er best på!
                            </p>
                            <div className='bold-text'>
                                <p>
                                Konsentrer deg om det du er god på – Vi tar oss av regnskapet!
                                </p>
                            </div>
                        </div>
                    </div>

            </div>


            <section className="section-white">
                <h2 className="section-title">
                    The team behind M&N Regnskap
                </h2>
                <p className="section-subtitle"> {message} </p>

                <div className="container">
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
                        <div className="col-sm-12 col-md-4">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Haseeb Talib</h3>
                                <div className="team-info">
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Ibrahim Mughdal</h3>
                                <div className="team-info">
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
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