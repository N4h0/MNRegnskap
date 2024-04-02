import React, { Component } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../languages/LanguageContext';
import { Link } from 'react-router-dom';

import en from '../languages/en.json';
import no from '../languages/no.json';

export default class NavBar extends Component {
    static contextType = LanguageContext;

    state = {
        isMenuOpen: false,
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    render() {
        const { language } = this.context;
        const labels = language === 'norsk' ? no : en;

        return (
            <div className={`topnav ${this.state.isMenuOpen ? 'responsive' : ''}`}>
                <div className="left-aligned-items">
                    <img src="/mn-regnskaplogo.png" alt="M&N Regnskap Logo" />
                </div>

                <div className="right-aligned-items">
                    <Link to="/hjem" className="navTekst">{labels.home}</Link>
                    <Link to="/team" className="navTekst">{labels.about}</Link>
                    <Link to="/link" className="navTekst">{labels.deadlines}</Link>
                    <Link to="/contact" className="navTekst">{labels.contact_us}</Link>
                </div>

                <a href="javascript:void(0);" className="icon" onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
        );
    }
}
