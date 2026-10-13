import React, { useEffect } from 'react';

import '../css/GTC.css';

import NavLink from "../components/NavLink.jsx";

// GTC page
function GTC() {
    // change the title
    useEffect(() => {
        document.title = "Canina Lingua - Conditions générales de ventes";
    }, []);

    return (
        <div className="legal-container">
            <h1>Conditions générales de ventes</h1>

            {/* Part 1 of the GTC*/}
            <div className="legal-section">
                <h2>CGV</h2>
                <div className="legal-section-text">
                    <p><strong>Exemple</strong></p>
                    <p>pour les CGV</p>

                </div>
            </div>

            
        </div>
    );
}

export default GTC;