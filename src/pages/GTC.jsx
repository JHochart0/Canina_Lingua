import React, { useEffect } from 'react';
import '../css/GTC.css';
import NavLink from "../components/NavLink.jsx";

// General Terms and Conditions page
function GTC() {

    // Change the tab title
    useEffect(() => {
        document.title = "WebUniv | Conditions générales de prestation de service";
    }, []);
    
    return (
        <div className="GTC-container">
            <h1>Conditions Générales de Prestations de Service</h1>

            <div className="gtc-section">
                <h2>Titre section articles</h2>
                <div className="gtc-section-text">
                    <h3>Article 1 - Exemple d'article</h3>
                    <p>
                        Ceci est le contenu d'un article
                    </p>

                </div>
            </div>

            

            <div className="gtc-link">
                <p>Besoin de renseignements ? </p>
                <NavLink to="/contact" content="Contactez-nous !" id=""/>
                
            </div>
        </div>
    );
}

export default GTC;