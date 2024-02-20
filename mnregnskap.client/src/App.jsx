//import { useEffect, useState } from 'react';
import useState from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hjem from './pages/Hjem';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team'


//Må vere isntallert:
//react-router-dom: npm install react-router-dom
//reactstrap: npm install reactstrap

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Hjem />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Hjem" element={<Hjem />} />
            </Routes>
        </Router>
    );
}

export default App;