//Inspirasjon fra https://www.w3schools.com/css/css_navbar.asp og https://www.w3schools.com/css/css_dropdowns.asp
import { Component } from 'react';
import './NavBar.css';
import { LanguageContext } from '../languages/LanguageContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata

export default class NavBar extends Component {
    static contextType = LanguageContext; // Gjor LanguageContext tilgjengelig i denne komponenten

    render() {
        const { language } = this.context; // Hent ut language fra context
        const labels = language === 'norsk' ? no : en; // Velg riktig sprokobjekt
        return (
            <div className="topnav">
                <Link to="/hjem" className="navTekst">{labels.home}</Link>
                <Link to="/team" className="navTekst">{labels.about}</Link>
                <Link to="/deadlines" className="navTekst">{labels.deadlines}</Link>
                <Link to="/contact" className="navTekst">{labels.contact_us}</Link>
                <div className="dropDown">
                    <a className="navTekst">{labels.language}</a>
                    <div className="dropDownContent">
                        <button onClick={() => this.context.setLanguage('norsk')} className="text-dark nav-link">{labels.english}</button>
                        <button onClick={() => this.context.setLanguage('english')} className="text-dark nav-link">{labels.norwegian}</button>
                    </div>
                </div>
            </div>
        );
    }
}