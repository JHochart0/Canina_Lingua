import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css'

import ScrollToTop from "./hooks/useScrollToTop.jsx";

import Header from './components/Header.jsx';
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Footer from './components/Footer.jsx';


import Home from './pages/Home.jsx';
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Photos from "./pages/Photos.jsx";
import Legal from "./pages/Legal.jsx";
import NotFound404 from "./pages/NotFound404.jsx";


function App() {
    
    return (
        <Router basename="/">
            <ScrollToTop />
            <div className="App">
                
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/prestations" element={<Services/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/gallerie" element={<Photos/>} />
                        <Route path="/legal" element={<Legal/>} />
                        <Route path="*" element={<NotFound404/>} />
                    </Routes>
                </div>
                <ScrollToTopButton />
                
            </div>
        </Router>
    );
}

export default App;
