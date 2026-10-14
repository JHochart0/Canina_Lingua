import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";

import '../css/About.css';

import NavLink from "../components/NavLink.jsx";

function About() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    // change the title
    useEffect(() => {
        document.title = "Canina Lingua - À propos de moi & mes valeurs";
    }, []);

    return (
        <div className="about-container">
            
        </div>
    );
}

export default About;
