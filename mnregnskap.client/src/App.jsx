import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hjem from './pages/Hjem';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';

// Importer LanguageProvider
import { LanguageProvider } from './languages/LanguageContext';

// Må være installert: (korrigerte kommentaren)
// react-router-dom: npm install react-router-dom
// reactstrap: npm install reactstrap
// font awesome: npm install --save @fortawesome/react-fontawesome
// font awesome icon: npm install --save @fortawesome/free-solid-svg-icons

function App() {
    return (
        <LanguageProvider> {/* Innkapsle appen din med LanguageProvider */}
            <Router>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Hjem />} />
                        <Route path="/Team" element={<Team />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Hjem" element={<Hjem />} />
                    </Routes>
                    <Chatbot />
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;