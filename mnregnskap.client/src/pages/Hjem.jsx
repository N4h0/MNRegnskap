import React from 'react';
import './Hjem.css';
function Homepage() {
    return (
        <>
            <div className="bilde-seksjon">
                <Bildet />
            </div>
            <div className="regnskap-seksjon">
                <Regnskap />
            </div>
            <div className="Partnere-seksjon">
                <Partnere />
            </div>
            <div className="Møt-oss-seksjon">
                <Møtoss />
            </div>
            <div className="Kontakt-seksjon">
                <Kontakt />
            </div>
        </>
    );
}


const Bildet = () => (

    <div className="bilde-seksjon-img">
        <img src="/index-bildet.jpg" alt="" className="img-style" />
        <div className="tekst-i-midten">
            <h1>M&N</h1>
            <h1>REGNSKAP</h1>
            <h4>Vi tar vare p&aring; regnskapet!</h4>
            <div className="bildet-seksjon-knapp">
                <button className="mer-info-knapp">MER INFO</button>
            </div>
        </div>
    </div>

);

const Regnskap = () => (
    <>
        <div className="framer-overskrift">
            <h2 className="framer-text">Your Ambitions, Our Expertise – How Can We Support You?</h2>
        </div>
        <div className="framer-boks">
            <div className="framer-container">
                <div className="framer-img">
                    <div data-framer-background-image-wrapper="true">
                        <img src="/kalk.png" alt="regnskap &amp; �rsoppgj�r" loading="lazy" />
                    </div>
                </div>
                <div className="framer-title">
                    <h5 className="framer-text">Accounting</h5>
                </div>
                <div className="framer-text-container">
                    <p className="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
                </div>
            </div>
            <div className="framer-container">
                <div className="framer-img">
                    <div data-framer-background-image-wrapper="true">
                        <img src="/regn1.jpg" alt="regnskap &amp; �rsoppgj�r" loading="lazy" />
                    </div>
                </div>
                <div className="framer-title">
                    <h5 className="framer-text">Accounting</h5>
                </div>
                <div className="framer-text-container">
                    <p className="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
                </div>
            </div>
            <div className="framer-container">
                <div className="framer-img">
                    <div data-framer-background-image-wrapper="true">
                        <img src="/regn2.jpg" alt="regnskap &amp; �rsoppgj�r" loading="lazy" />
                    </div>
                </div>
                <div className="framer-title">
                    <h5 className="framer-text">Accounting</h5>
                </div>
                <div className="framer-text-container">
                    <p className="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
                </div>
            </div>
            <div className="framer-container">
                <div className="framer-img">
                    <div data-framer-background-image-wrapper="true">
                        <img src="/regn3.png" alt="regnskap &amp; �rsoppgj�r" loading="lazy" />
                    </div>
                </div>
                <div className="framer-title">
                    <h5 className="framer-text">Accounting</h5>
                </div>
                <div className="framer-text-container">
                    <p className="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
                </div>
            </div>

        </div>
        <div className="framer-knapp">
            <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink" href="/services">
                <span className="c">
                    <span className="elementor-button-text">Mer Info</span>
                </span>
            </a>
        </div>
    </>
);

const Partnere = () => (
    <></>
);

const Møtoss = () => (
    <>
        <h1 className="Møt-oss-overskrift">Møt oss</h1>
        <div className="Møt-oss-flex">
            <div className="Møt-oss-bilde">
                <img src="./Moosa.png" alt="Bilde av Moosa som er en av grunnleggerene til M&N regnskap (Statsautorisert regnskapsfører)" />
                <p>STATSAUTORISERT REGNSKAPSFØRER</p>
            </div>
            <div className="Møt-oss-bilde">
                <img src="./Naila.png" alt="Bilde av Naila som er en av grunnleggerene til M&N regnskap (Statsautorisert regnskapsfører)" />
                <p>STATSAUTORISERT REGNSKAPSFØRER</p>
            </div>
        </div>
    </>
);

const Kontakt = () => (
    <></>
);

export default Homepage;