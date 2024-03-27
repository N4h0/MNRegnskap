//Inspirasjon fra https://www.w3schools.com/css/css_navbar.asp og https://www.w3schools.com/css/css_dropdowns.asp
import { Component } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // https://fontawesome.com/icons/bars?f=classic&s=solid
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../languages/LanguageContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import en from '../languages/en.json'; // Engelsk spr�kdata
import no from '../languages/no.json'; // Norsk spr�kdata

export default class NavBar extends Component {
    static contextType = LanguageContext; // Gjor LanguageContext tilgjengelig i denne komponenten
    state = {
        isMenuOpen: false, // Initial state of the menu
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };
    render() {
        const { language } = this.context; // Hent ut language fra context
        const labels = language === 'norsk' ? no : en; // Velg riktig sprokobjekt
        return (
            <div className="topnav">
                <Link to="/hjem">
                    <img src="/mn-regnskaplogo.png" alt="M&N Regnskap Logo" />
                </Link>
                <FontAwesomeIcon id="dropDownIkon" icon={faBars} onClick={this.toggleMenu} />
                <Link to="/hjem" className="navTekst">{labels.home}</Link>
                <Link to="/team" className="navTekst">{labels.about}</Link>
                <Link to="/link" className="navTekst">{labels.deadlines}</Link>
                <Link to="/contact" className="navTekst">{labels.contact_us}</Link>
                <div className="dropDown">
                    <a className="navTekst">{labels.language}</a>
                    <div className="dropDownContent">
                        <button onClick={() => this.context.setLanguage('english')} className="text-dark nav-link">{labels.english}</button>
                        <button onClick={() => this.context.setLanguage('norsk')} className="text-dark nav-link">{labels.norwegian}</button>
                    </div>
                </div>
            </div>
        );
    }
}