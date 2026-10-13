import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";

import '../css/Home.css';

// home page
function Home() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    // change the title
    useEffect(() => {
        document.title = "Canina Lingua - Éducateur comportementaliste canin";
    }, []);

    return (
        <div className="home-container">
            Il y aura ici l'accueil !
        </div>
    );
}

export default Home;