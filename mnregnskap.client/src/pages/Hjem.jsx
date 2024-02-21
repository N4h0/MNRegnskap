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

        
       
     
        <div class="framer-overskrift">
            <h2 class="framer-text">Your Ambitions, Our Expertise – How Can We Support You?</h2>
        </div>
        <div class="framer-boks">
        <div class="framer-container">
            <div class="framer-img">
                <div data-framer-background-image-wrapper="true">
                    <img src="/kalk.png" alt="regnskap &amp; �rsoppgj�r" loading="lazy"/>
                </div>
            </div>
            <div class="framer-title">
                <h5 class="framer-text">Accounting</h5>
            </div>
            <div class="framer-text-container">
                <p class="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
            </div>
        </div>
            <div class="framer-container">
                <div class="framer-img">
                    <div data-framer-background-image-wrapper="true">
                        <img src="/regn1.jpg" alt="regnskap &amp; �rsoppgj�r" loading="lazy" />
                    </div>
                </div>
                <div class="framer-title">
                    <h5 class="framer-text">Accounting</h5>
                </div>
                <div class="framer-text-container">
                    <p class="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
                </div>
            </div>
            <div class="framer-container">
                <div class="framer-img">
                    <div data-framer-background-image-wrapper="true">
                        <img src="/regn2.jpg" alt="regnskap &amp; �rsoppgj�r" loading="lazy" />
                    </div>
                </div>
                <div class="framer-title">
                    <h5 class="framer-text">Accounting</h5>
                </div>
                <div class="framer-text-container">
                    <p class="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
                </div>
            </div>
            <div class="framer-container">
                <div class="framer-img">
                    <div data-framer-background-image-wrapper="true">
                        <img src="/regn3.png" alt="regnskap &amp; �rsoppgj�r" loading="lazy" />
                    </div>
                </div>
                <div class="framer-title">
                    <h5 class="framer-text">Accounting</h5>
                </div>
                <div class="framer-text-container">
                    <p class="framer-text">Ongoing Bookkeeping, Year-End Statements, Tax Returns, and Reporting into Altinn.</p>
                </div>
            </div>
           
        </div>
        <div class="framer-knapp">
            <a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink" href="/services">
                <span class="c">
                    <span class="elementor-button-text">Mer Info</span>
                </span>
            </a>

        </div>
     
    </>


);

export default Homepage;