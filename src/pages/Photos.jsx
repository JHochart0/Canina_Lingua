import React, { useEffect, useState } from 'react';
import PhotoItem from '../components/PhotoItem';
import '../css/Photos.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

// Photos gallery page
function Photos() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    // change the title of the page and fetch the google script used to get the images stocked in the google drive
    useEffect(() => {
        document.title = "Canina Lingua - Galerie photos";

        // Google script calling the google drive API, change the link of each new deployment
        const url = `lien deploiement google script`;

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

            {/* Photos gallery part */}
            <div className="photos-gallery-container">
                {loading && <div className="photos-gallery-loader"></div>}
                {!loading && images.length === 0 && <p className="photos-gallery-notFound">Aucune photo n'a été trouvée.</p>}
                {images.map((file) => (
                    <PhotoItem key={file.id} file={file} />
                ))}
            </div>

        </div>
    );
}

export default Photos;