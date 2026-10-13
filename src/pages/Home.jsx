import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";

import '../css/Home.css';

// home page
function Home() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    // change the title
    useEffect(() => {
        document.title = "Page d'accueil";
    }, []);

    return (
        <div className="home-container">
            ceci est un test
        </div>
    );
}

export default Home;