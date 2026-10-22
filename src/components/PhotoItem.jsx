import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// this component is used to show one photo in the gallery and show a lightbox with the real size of the image when clicked on
function PhotoItem({ file }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // build the url of the HD version
        const url = `https://lh3.googleusercontent.com/d/${file.id}=w800`;

        // Preload the HD image
        const img = new Image();
        img.src = url;
        img.onload = () => setIsLoaded(true);
    }, [file.id]);

    return (
        <>
            {/* Thumbnail image */}
            <div className="zoom-animation">
                <img
                    src={file.webContentLink}
                    alt={`CaninaLingua_${file.name}`}
                    className="photos-gallery-image"
                    onError={(e) => {
                        e.target.src = file.webContentLink;
                    }}
                    onClick={() => setIsOpen(true)}
                />
            </div>

            {/* Lightbox */}
            {isOpen && createPortal(
                <div className="lightbox" onClick={() => setIsOpen(false)}>
                    {/* Bouton pour fermer */}
                    <button
                        className="lightbox-close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                        aria-label="Fermer"
                    >
                        &times;
                    </button>

                    {/* Loader pendant le chargement de l'image */}
                    {!isLoaded && <div className="lightbox-loader"></div>}

                    {isLoaded && (
                        <img
                            src={file.webContentLink}
                            alt={`CaninaLingua_${file.name}`}
                            className="lightbox-image"
                            onClick={(e) => e.stopPropagation()}
                            onError={(e) => {
                                e.target.src = file.webContentLink;
                            }}
                        />
                    )}
                </div>,
                document.body
            )}
        </>
    );
}

export default PhotoItem;