import React from 'react';

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
      </div>
      <div className="image-container">
        <img src="minion.png" alt="Minion" />
      </div>
    </div>
  );
};

export default NotFound;