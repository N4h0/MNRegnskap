import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="Footer" id="colophon">
            <div className="footer-adv footer-adv-layout-4">
                <div className="footer-adv-overlay">
                    <div className="ast-container">
                        <div className="ast-row">
                            {/* Contact Information */}
                            <ContactInfo />
                            {/* Additional Widgets or Content */}
                            {/* This is where you can simplify or add more components as needed */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ast-small-footer footer-sml-layout-2">
                <div className="ast-footer-overlay">
                    <div className="ast-container">
                        <div className="ast-small-footer-wrap">
                            <div className="ast-row ast-flex">
                                {<h1>MN regnskap</h1>}
                                <Copyright />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// ContactInfo component
const ContactInfo = () => (
    <div className="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget">
        <h2 className="widget-title">Ta Kontakt</h2>
        {/* Add the address and contact SVGs and text here */}
    </div>
);

// Copyright component
const Copyright = () => (
    <div className="ast-small-footer-section ast-small-footer-section-1 ast-small-footer-section-equally ast-col-md-6">
        <p>Opphavsrett © {new Date().getFullYear()} M&N Regnskap. All rights reserved.</p>
    </div>
);

export default Footer;