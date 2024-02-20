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
		<footer class="site-footer" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">



			<div class="footer-adv footer-adv-layout-4">
				<div class="footer-adv-overlay">
					<div class="ast-container">
						<div class="ast-row">
							<div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-1">
								<div id="text-12" class="widget widget_text">			<div class="textwidget"></div>
								</div>				</div>
							<div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-2">
								<div id="media_image-5" class="widget widget_media_image"><h2 class="widget-title">godkjenninger</h2><img width="226" height="107" src="https://usercontent.one/wp/mnregnskap.no/wp-content/uploads/2019/11/1508153845143.png" class="image wp-image-1129 attachment-full size-full" alt="" decoding="async" style="max-width: 100%; height: auto;" loading="lazy"></div>				</div>
							<div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-3">
								<div id="astra-widget-address-5" class="widget astra-widget-address"><h2 class="widget-title">Ta Kontakt</h2>
									<div class="address clearfix">
										<address class="widget-address widget-address-stack widget-address-icons-1">

											<div class="widget-address-field">
												<svg xmlns="http://www.w3.org/2000/svg" class="address-icons" width="15px" height="15px" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
												</svg>
												<span class="address-meta">Professor Dahls gate 18, 0353 Oslo</span>
											</div>
											<div class="widget-address-field">
												<svg xmlns="http://www.w3.org/2000/svg" class="address-icons" width="15px" height="15px" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
												</svg>
												<span class="address-meta">
													<a href="tel:4740056898">+47-400-56-898</a>
												</span>
											</div>
											<div class="widget-address-field">
												<svg xmlns="http://www.w3.org/2000/svg" class="address-icons" width="15px" height="15px" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
												</svg>
												<span class="address-meta">
													<a href="mailto:mn@mnregnskap.no">mn@mnregnskap.no</a>
												</span>
											</div>
										</address>
									</div>

								</div>				</div>
							<div class="ast-col-lg-3 ast-col-md-3 ast-col-sm-12 ast-col-xs-12 footer-adv-widget footer-adv-widget-4">
								<div id="text-13" class="widget widget_text">			<div class="textwidget"></div>
								</div>				</div>
						</div><!-- .ast-row -->
					</div><!-- .ast-container -->
				</div><!-- .footer-adv-overlay-->
			</div><!-- .ast-theme-footer .footer-adv-layout-4 -->

			<div class="ast-small-footer footer-sml-layout-2">
				<div class="ast-footer-overlay">
					<div class="ast-container">
						<div class="ast-small-footer-wrap">
							<div class="ast-row ast-flex">

								<div class="ast-small-footer-section ast-small-footer-section-1 ast-small-footer-section-equally ast-col-md-6">
									<div class="ast-footer-widget-1-area"><aside id="text-14" class="widget widget_text">			<div class="textwidget"><p>Opphavsrett © 2020 <span class="ast-footer-site-title" title="Shift-klikk for å redigere dette elementet.">M&amp;N Regnskap</span></p>
									</div>
									</aside></div>						</div>

								<div class="ast-small-footer-section ast-small-footer-section-2 ast-small-footer-section-equally ast-col-md-6">
									<div class="ast-footer-widget-2-area"><aside id="text-17" class="widget widget_text">			<div class="textwidget"><p><span class="ast-footer-site-title" title="Shift-klikk for å redigere dette elementet.">Drevet av M&amp;N Regnskap</span></p>
									</div>
									</aside></div>						</div>

							</div> <!-- .ast-row.ast-flex -->
						</div><!-- .ast-small-footer-wrap -->
					</div><!-- .ast-container -->
				</div><!-- .ast-footer-overlay -->
			</div><!-- .ast-small-footer-->


		</footer>
        );
    }
}