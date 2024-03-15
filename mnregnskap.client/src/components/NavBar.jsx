import { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    static displayName = NavBar.name;

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
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
                            <NavLink tag={Link} className="text-dark nav-link" to="/hjem">
                                <p className="nav-link-text">Hjem</p>
                            </NavLink>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark nav-link" to="/about">
                                    <p className="nav-link-text">Om oss</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark nav-link" to="/team">
                                    <p className="nav-link-text">V&aring;rt team</p>
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark nav-link" to="/link">
                                <p className="nav-link-text">Frister</p>
                            </NavLink>
                        </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark nav-link" to="/contact">
                                    <p className="nav-link-text">Kontakt oss</p>
                                </NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
        );
    }
}