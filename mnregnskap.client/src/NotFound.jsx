import React from 'react';
import './NotFound.css';


/*const SentenceWithLink = () => {
  const handleLinkClick = () => {
    // Handlingen som skal utføres når lenken klikkes, for eksempel å åpne en ny fane
    window.open('https://localhost:5173/hjem', '_blank');
  };
  */

const NotFound = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h2>Oisann... Vi fant ikke siden du lette etter!</h2>
        <p>Sikker på at du har skrevet inn riktig URL? Prøv på nytt {/*<span onClick={handleLinkClick} style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}} >herifra.</span>*/} herifra.</p>
          <div className="logo-container">
            <img src="/public/logo1.png" alt="Hjem" className="logo1" />
            <img src="/public/logo2.png" alt="Chabot" className="logo2" />
            <img src="/public/logo3.png" alt="logo 3" className="logo3" />
            <img src="/public/logo4.png" alt="logo 4" className="logo4" /> 
        </div>
      </div>
      <div className="image-container">
        <img src="minion.png" alt="Minion" />
      </div>
    </div>
    
  );
};

export default NotFound;