import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1><span className="with-line" >4</span>04</h1>
        <p>Oisann... Vi fant ikke siden du lette etter! Sikker på at du har skrevet inn riktig URL? Prøv på nytt herifra:</p>
          <div className="logo-container">
            <a href="/hjem">
              <img src="/logo1.png" alt="Hjem" className="logo1" />
            </a>
            <a href="/chatbot">
              <img src="/logo2.png" alt="logo 2" className="logo2" />
            </a>
            <a href="/contact">
              <img src="/logo3.png" alt="logo 3" className="logo3" />  
            </a>
        </div>
      </div>
      <div className="image-container">
        <img src="astronaut.png" alt="astronaut" className="astronaut-picture" />
      </div>
    </div>
    
  );
};

export default NotFound;