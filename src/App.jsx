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
import GTC from "./pages/GTC.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import About from "./pages/About.jsx";


function App() {
    
    return (
        <Router basename="/">
            <ScrollToTop />
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/prestations-tarifs" element={<Services/>} />
                        <Route path="/a-propos" element={<About/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/galerie-photos" element={<Photos/>} />
                        <Route path="/mentions-legales" element={<Legal/>} />
                        <Route path="/conditions-generales-de-ventes" element={<GTC/>} />
                        <Route path="*" element={<NotFound404/>} />
                    </Routes>
                </div>
                <ScrollToTopButton />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
