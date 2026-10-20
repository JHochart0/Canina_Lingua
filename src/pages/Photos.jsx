import React, { useEffect, useState } from 'react';
import PhotoItem from '../components/PhotoItem';
import '../css/Photos.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

// Photos gallery page
function Photos() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useRevealOnScroll(".fade-in-up");
    useRevealOnScroll(".zoom-animation", images);

    useEffect(() => {
        document.title = "Canina Lingua - Galerie photos";

        const url = `https://script.google.com/macros/s/AKfycbzBUcyxZY1naHAliQ0NwNreurJG8pds3TstxytTt9NGwWjZGKu5bv4k4G6Q7CBs3q3v/exec`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setImages(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors du chargement des images :", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="photos-container">

            {/* Grande Bannière Hero immersive */}
            <div className="hero-banner fade-in-up">
                <div className="hero-banner-overlay"></div>
                
                <div className="hero-banner-card">
                    <div className="hero-paw-bg"></div>
                    
                    
                    <h1 className="hero-banner-title">Galerie Photos</h1>
                    
                    <p className="hero-banner-subtitle">
                        Découvrez en images le quotidien, les séances d'éducation et la complicité partagée avec nos compagnons à quatre pattes.
                    </p>

                    <div className="hero-banner-stats">
                        <div className="stat-item">
                            <span className="stat-value">{loading ? "..." : images.length}</span>
                            <span className="stat-label">Photos immortalisées</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">Méthode Éthique</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Galerie de photos */}
            <div className="photos-gallery-container fade-in-up">
                {loading && <div className="photos-gallery-loader"></div>}
                {!loading && images.length === 0 && (
                    <p className="photos-gallery-notFound">Aucune photo n'a été trouvée.</p>
                )}
                {images.map((file) => (
                    <PhotoItem key={file.id} file={file}/>
                ))}
            </div>

        </div>
    );
}

export default Photos;