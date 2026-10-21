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

            {/* Hero banner */}
            <div className="photos-hero-banner fade-in-up">
                <div className="photos-hero-banner-overlay"></div>
                
                <div className="photos-hero-banner-card">
                    <div className="photos-hero-paw-bg"></div>
                    
                    <h1 className="photos-hero-banner-title">Galerie Photos</h1>
                    
                    <p className="photos-hero-banner-subtitle">
                        Découvrez en images le quotidien, les séances d'éducation et la complicité partagée avec nos compagnons à quatre pattes.
                    </p>

                    <div className="photos-hero-banner-stats">
                        <div className="photos-stat-item">
                            <span className="photos-stat-value">{loading ? "..." : images.length}</span>
                            <span className="photos-stat-label">Photos immortalisées</span>
                        </div>
                        <div className="photos-stat-divider"></div>
                        <div className="photos-stat-item">
                            <span className="photos-stat-value">Environnements réels</span>
                            <span className="photos-stat-label">À domicile & En balade</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Photos gallery */}
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