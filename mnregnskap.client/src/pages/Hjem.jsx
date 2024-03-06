import React from 'react';
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
            <h4>Vi tar vare p&aring; regnskapet!</h4>
            <a href="/about">
                <button className="bildeKnapp">MER INFO</button>
            </a>
        </div>
    </>
);

const Regnskap = () => (
    <>
        <h2>Your Ambitions, Our Expertise – How Can We Support You?</h2>
        <div className="regnskapsBoks">
            <div className="regnskapsKort">
                <img src="/kalk.png" alt="" loading="lazy" />
                <h3>Accounting</h3>
                <p>Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
            </div>
            <div className="regnskapsKort">
                <img src="/regn1.jpg" alt="" loading="lazy" />
                <h3>Accounting</h3>
                <p>Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
            </div>
            <div className="regnskapsKort">
                <img src="/regn2.jpg" alt="" loading="lazy" />
                <h3>Accounting</h3>
                <p>Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
            </div>
            <div className="regnskapsKort">
                <img src="/regn3.png" alt="" loading="lazy" />
                <h3>Accounting</h3>
                <p>Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
            </div>
        </div>
        <a className="regnskapsKnapp" href="/about">
            <span className="regnskapsKnappTekst">Mer Info</span>
        </a>
    </>
);

const Partnere = () => (
    <>
        <div className="partnereBakgrunn">
            <h1>Våre partnere</h1>
        </div>
    </>
);

const Møtoss = () => (
    <>
        <h1>Møt oss</h1>
        <div className="kontaktOssBoks">
            <div className="kontaktOssKort">
                <img src="./Naila.png" alt="Bilde av Moosa som er en av grunnleggerene til M&N regnskap (Statsautorisert regnskapsfører)" />
                <h1>NAILA SOHAIL KHOKHAR</h1>
                <p>STATSAUTORISERT REGNSKAPSFØRER</p>
            </div>
            <div className="kontaktOssKort">
                <img src="./Moosa.png" alt="Bilde av Naila som er en av grunnleggerene til M&N regnskap (Statsautorisert regnskapsfører)" />
                <h1>MOOSA ALI RASHID</h1>
                <p>STATSAUTORISERT REGNSKAPSFØRER</p>
            </div>
        </div>
    </>
);

const Kontakt = () => (
    <>
        <div className="kontaktBilde">
            <img src="./bok.jpg" alt="Bakgrunsbilde av noen regnskapsbøker som ligger oppå hverandre." />
            <div className="kontaktTekstboks">
                <h1>Join Our Family of Talent</h1>
                <h2>Concentrate on what you are good at - We take care of the accounts! Contact us for a no-obligation conversation.</h2>
                <p>Kontakt Oss</p>
            </div>
        </div>
    </>
);

export default Homepage;