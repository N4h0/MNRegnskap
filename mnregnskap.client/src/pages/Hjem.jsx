import React from 'react';
import './Hjem.css';
function Homepage() {
    return (
        <div className="bilde-seksjon">
            <div className="bilde-seksjon-img">
                <img src="/public/index-bildet.jpg" alt="" className="img-style" />
                <div className="tekst-i-midten">
                    <h1>M&N</h1>
                    <h1>REGNSKAP</h1>
                    <h4>Vi tar vare p&aring; regnskapet!</h4>
                    <div className="bildet-seksjon-knapp">
                        <button className="mer-info-knapp">MER INFO</button>

                    </div>
                </div>
       
            </div>
        </div>
    );
}

export default Homepage;