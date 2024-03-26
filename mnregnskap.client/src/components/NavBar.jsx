import { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { LanguageContext } from '../languages/LanguageContext';
import en from '../languages/en.json'; // Importer engelsk sprokdata
import no from '../languages/no.json'; // Importer norsk sprokdata

export default class NavBar extends Component {
    static contextType = LanguageContext; // Gjor LanguageContext tilgjengelig i denne komponenten

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this); // Ny binding
        this.state = {
            collapsed: true,
            dropdownOpen: false // Ny tilstandsvariabel
        };
    }

    toggleDropdown() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleMouseEnter = () => {
        this.setState({ dropdownOpen: true });
    };

    handleMouseLeave = () => {
        this.setState({ dropdownOpen: false });
    };


    //FUNKY BUG:

    //                                    <DropdownItem onClick={() => this.context.setLanguage('norsk')}>Norsk</DropdownItem>
    //                               <DropdownItem onClick={() => this.context.setLanguage('english')}>English</DropdownItem>

    //Den koden fungerer, men når eg oversetter blir dropdown-UIen feil på engelsk?!?!??!

    render() {
        const { language } = this.context; // Hent ut language fra context
        const labels = language === 'norsk' ? no : en; // Velg riktig språkobjekt
        return (
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow navbar" light>
                <NavbarBrand tag={Link} to="/hjem" className="navbar-logo-container">
                    <div className="navbar-logo-wrapper">
                        <img src="/mn-regnskaplogo.png" alt="M&N Regnskap Logo" className="mr-2 navbar-logo" />
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark nav-link" to="/hjem">{labels.home}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark nav-link" to="/team">{labels.about}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark nav-link" to="/link">{labels.deadlines}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark nav-link" to="/contact">
                                {labels.contact_us}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                <DropdownToggle caret className="text-dark nav-link">
                                    {language === 'norsk' ? 'Norsk' : 'English'}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => this.context.setLanguage('norsk')}>{labels.norwegian}</DropdownItem>
                                    <DropdownItem onClick={() => this.context.setLanguage('english')}>{labels.english}</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        );
    }
}