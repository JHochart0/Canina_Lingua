import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound404.css';

function NotFound404() {
    useEffect(() => {
        document.title = "Page non trouvée";
    }, []);

    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-code">404</h1>
                
                {/* Message thématique*/}
                <h2 className="notfound-title">Message thématique</h2>
                <p className="notfound-text">
                    Oups ! La page que vous cherchez n'existe pas.
                </p>
                
                <Link to="/" className="notfound-btn">
                    Revenir à l'accueil
                </Link>
            </div>
        </div>
    );
}

export default NotFound404;