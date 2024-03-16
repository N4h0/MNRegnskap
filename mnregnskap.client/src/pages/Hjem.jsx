import React, { useEffect } from 'react';
import './Hjem.css';

function Homepage() {
    return (
        <>
            <div className="bildeSeksjon">
                <Bildet />
            </div>
            <div className="regnskapsSeksjon">
                <Regnskap />
            </div>
            <div className="partnereSeksjon">
                <Partnere />
            </div>
            <div className="møtOssSeksjon">
                <Møtoss />
            </div>
            <div className="kontaktSeksjon">
                <Kontakt />
            </div>
        </>
    );
}

const Bildet = () => (
    <>
        <img src="/hjem-bildet.jpg" alt="" className="img-style" />
        <div className="bildeTekst">
            <h1>M&N</h1>
            <h1>REGNSKAP</h1>
            <h4>Vi tar vare på regnskapet!</h4>
            <a href="/om">
                <button className="bildeKnapp">MER INFO</button>
            </a>
        </div>
    </>
);

const Regnskap = () => (
    <>
        <h2>Dine Ambisjoner, Vår Ekspertise – Hvordan Kan Vi Støtte Deg?</h2>
        <div className="regnskapsBoks">
            <div className="regnskapsKort">
                <img src="/kalk.png" alt="" loading="lazy" />
                <h3>Regnskap</h3>
                <p>Løpende bokføring, Årsoppgjør, Skattemelding og Rapportering til Altinn.</p>
            </div>
            <div className="regnskapsKort">
                <img src="/regn1.jpg" alt="" loading="lazy" />
                <h3>Rådgivning</h3>
                <p>Få assistanse fra regnskapseksperter for å få mest mulig ut av tiden og pengene dine.</p>
            </div>
            <div className="regnskapsKort">
                <img src="/regn2.jpg" alt="" loading="lazy" />
                <h3>Skattemelding for personer</h3>
                <p>Har du ansatte? Spar tid ved å la oss håndtere lønnsbehandling og rapportering til A-meldingen.</p>
            </div>
            <div className="regnskapsKort">
                <img src="/regn3.png" alt="" loading="lazy" />
                <h3>Budsjettlegging</h3>
                <p>Vi fakturerer på dine vegne, enten elektronisk eller per post.</p>
            </div>
        </div>
        <a className="regnskapsKnapp" href="/om">
            <span className="regnskapsKnappTekst">Mer Info</span>
        </a>
    </>
);

const Partnere = () => {
    // Bruk useEffect til å kjøre JavaScript-koden ved lasting av komponenten
    useEffect(() => {
        $(document).ready(function () {
            $('.customer-logos').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        });
    }, []); // Pass an empty array as second argument to run this effect only once after the component mounts

    // JSX-koden
    return (
        <div className="partnereBakgrunn">
            <h2 className="text-center font-weight-bold">Våre partnere</h2>
            <section className="customer-logos slider">
                <div className="slide"><img src="./adidas.png" alt="logo" /></div>
                <div className="slide"><img src="./facebook.png" alt="logo" /></div>
                <div className="slide"><img src="./google.png" alt="logo" /></div>
                <div className="slide"><img src="./instagram.png" alt="logo" /></div>
                <div className="slide"><img src="./nike.png" alt="logo" /></div>
                <div className="slide"><img src="./twitter.png" alt="logo" /></div>
                <div className="slide"><img src="./uber.png" alt="logo" /></div>
                <div className="slide"><img src="./youtube.png" alt="logo" /></div>
            </section>
        </div>
    );
}
const Møtoss = () => (
    <>
        <h1>Møt Oss</h1>
        <div className="kontaktOssBoks">
            <div className="kontaktOssKort">
                <img src="./Moosa.png" alt="Bilde av Moosa, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)" />
                <h1>MOOSA ALI RASHID</h1>
                <p>STATSAUTORISERT REGNSKAPSFØRER</p>
            </div>
            <div className="kontaktOssKort">
                <img src="./Naila.png" alt="Bilde av Naila, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)" />
                <h1>NAILA SOHAIL KHOKHAR</h1>
                <p>STATSAUTORISERT REGNSKAPSFØRER</p>
            </div>
        </div>
    </>
);

const Kontakt = () => (
    <>
        <div className="kontaktBilde">
            <img src="./bok.jpg" alt="Bakgrunnsbilde av noen regnskapsbøker som ligger oppå hverandre." />
            <div className="kontaktTekstboks">
                <h1>Bli Med i Vår Talentfamilie</h1>
                <h2>Konsentrer deg om det du er god på - Vi tar oss av regnskapet! Kontakt oss for en uforpliktende samtale.</h2>
                <p>Kontakt Oss</p>
            </div>
        </div>
    </>
);

export default Homepage;
