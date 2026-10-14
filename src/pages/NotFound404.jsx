import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NotFound404.css';

function NotFound404() {
    useEffect(() => {
        document.title = "Canina Lingua - Page non trouvée";
    }, []);

    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-code">404</h1>
                <h2 className="notfound-title">Perdu lors de votre promenade ?</h2>
                <p className="notfound-text">
                    Oups ! La page que vous cherchez n'existe pas.
                </p>
                
                <NavLink to="/" className="notfound-btn">
                    Revenir à l'accueil
                </NavLink>
            </div>
        </div>
    );
}

export default NotFound404;