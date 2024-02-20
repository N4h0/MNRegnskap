import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hjem from './pages/Hjem';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';


//Må vere isntallert:
//react-router-dom: npm install react-router-dom
//reactstrap: npm install reactstrap

//Bruker react router for routing, sjekk ut https://www.w3schools.com/react/react_router, https://reactrouter.com/en/main/start/overview

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Hjem />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Hjem" element={<Hjem />} />
                <Route path="*" element={<NoPage />} /> 
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;