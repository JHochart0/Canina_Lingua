import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";
import '../css/Services.css';

function Services() {
    // Scroll reveal animation initialization
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    // Set page title on component mount
    useEffect(() => {
        document.title = "Canina Lingua - Prestations & Tarifs";
    }, []);

    return (
        <div className="services-container">
            
            {/* Services Hero Banner */}
            <div className="services-hero-banner fade-in-up">
                <div className="services-hero-banner-overlay"></div>

                <div className="services-hero-banner-card">
                    <div className="services-hero-paw-bg"></div>

                    <h1 className="services-hero-banner-title">
                        Mes prestations & tarifs
                    </h1>

                    <p className="services-hero-banner-subtitle">
                        Découvrez mes prestations d'éducation canine à domicile,
                        mes bilans comportementaux et mes activités en extérieur.
                        Une approche positive, éthique et éthologique, attentive
                        aux besoins et aux émotions de votre chien, dans son
                        environnement quotidien.
                    </p>

                    <div className="services-hero-banner-stats">
                        <div className="services-stat-item">
                            <span className="services-stat-value">
                                100% Environnements réels
                            </span>
                            <span className="services-stat-label">
                                À domicile & lieux de balade quotidiens
                            </span>
                        </div>

                        <div className="services-stat-divider"></div>

                        <div className="services-stat-item">
                            <span className="services-stat-value">
                                Un suivi sur-mesure
                            </span>
                            <span className="services-stat-label">
                                Séances, forfaits & balades collectives
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Services;