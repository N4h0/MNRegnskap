import React from 'react';
import './About.css';


function About() {
  
        const Bildet = () => (

            <div className="bilde-seksjon-img">
                <img src="/index-bildet.jpg" alt="" className="img-style" />
                <div className="tekst-i-midten">
                    <h1>About us</h1>
                    <h1>Skal endre bildet :P</h1>
                </div>
            </div>

        )
    return (
        <div>
            <div className="bilde-seksjon">
                <Bildet />
            </div>
            <div className="about-section">
                <h1>About M&N Accounting</h1>
                <p>M&N Accounting is a personal accounting firm located centrally in Frogner. Established in 2008 by Moosa Ali Rashid and Naila Sohail Khokhar, both with education in auditing, we have since become an authorized accounting firm with a strong emphasis on client communication and satisfaction.</p>
                <p>We specialize in providing comprehensive accounting services tailored to optimize our clients' financial situations. With extensive experience across various industries, we serve clients not only in Oslo but also throughout Norway.</p>
                <p>Our team comprises highly educated professionals with vast experience in the field. We understand the importance of maintaining a high professional standard and adhere to strict formal requirements and deadlines to avoid any errors or non-compliance consequences.</p>
                <p>In an industry undergoing rapid automation, we embrace digitalization while also offering traditional paper-based services. From A to Z, we handle all aspects of accounting, allowing our clients to concentrate on what they do best while we take care of their accounts.</p>
                <p>With a broad network of contacts in auditing and legal services, we are well-equipped to provide comprehensive financial advice and support to our clients, aiming to be valuable contributors to their success.</p>
            </div>
        </div>
            );
  
}

export default About;