import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";
import '../css/Services.css';


function Services() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    useEffect(() => {
        document.title = "Canina Lingua - Découvrez mes prestations & tarifs";
    }, []);


    return (
        <div className="services-container">
            Il y aura les prestations & tarifs ici
        </div>
    );
}

export default Services;