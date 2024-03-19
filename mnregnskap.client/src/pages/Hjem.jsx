import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../languages/LanguageContext'; // Juster stien etter hvor din LanguageContext befinner seg

import './Hjem.css';
// Importer dine språkdatafiler (eller håndter det som passer best for din app-struktur)
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata

function Homepage() {
    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket

    return (
        <>
            <div className="bildeSeksjon">
                <Bildet language={language} />
            </div>
            <div className="regnskapsSeksjon">
                <Regnskap language={language} />
            </div>
            <div className="partnereSeksjon">
                <Partnere language={language} />
            </div>
            <div className="møtOssSeksjon">
                <Møtoss language={language} />
            </div>
            <div className="kontaktSeksjon">
                <Kontakt language={language} />
            </div>
        </>
    );
}

function Bildet({ language }) {
    const textData = language === 'norsk' ? no : en;

    return (
        <>
            <img src="/hjem-bildet.jpg" alt="" className="img-style" />
            <div className="bildeTekst">
                <h1>M&N</h1>
                <h1>{textData.regnskap}</h1>
                <h4>{textData.home_page_text}</h4>
                <a href="/om">
                    <button className="bildeKnapp">{textData.more_info}</button>
                </a>
            </div>
        </>
    );
}


function Regnskap({ language }) {
    const textData = language === 'norsk' ? no : en;

    return (
        <>
            <h2>{textData.ambitions_expertise}</h2>
            <div className="regnskapsBoks">
                <div className="regnskapsKort">
                    <img src="/kalk.png" alt="" loading="lazy" />
                    <h3>{textData.accounting}</h3>
                    <p>{textData.accounting_description}</p>
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
}

const Partnere = ({ languageData }) => (
    <>
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
            <h1>{languageData.our_partners}</h1>
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
    </>
);

const Møtoss = ({ languageData }) => (
    <>
        <h1>{languageData.meet_us}</h1>
        <div className="kontaktOssBoks">
            <div className="kontaktOssKort">
                <img src="./Moosa.png" alt="Bilde av Moosa, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)" />
                <h1>MOOSA ALI RASHID</h1>
                <p>{languageData.chartered_accountant}</p>
            </div>
            <div className="kontaktOssKort">
                <img src="./Naila.png" alt="Bilde av Naila, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)" />
                <h1>NAILA SOHAIL KHOKHAR</h1>
                <p>{languageData.chartered_accountant}</p>
            </div>
        </div>
    </>
);

const Kontakt = ({ languageData }) => (
    <>
        <div className="kontaktBilde">
            <img src="./bok.jpg" alt="Bakgrunnsbilde av noen regnskapsbøker som ligger oppå hverandre." />
            <div className="kontaktTekstboks">
                <h1>{languageData.join_us}</h1>
                <h2>{languageData.contact_us_conversation}</h2>
                <p>{languageData.contact_us}</p>
            </div>
        </div>
    </>
);

export default Homepage;