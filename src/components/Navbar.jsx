import React from 'react';
import NavLink from "./NavLink.jsx";
import PhoneButton from './PhoneButton.jsx';

function Navbar(props) {
    const className = props.className;
    const onLinkClick = props.onLinkClick;

    return (
        <nav className={className}>
            <NavLink to="/" content="Accueil" id="navbar-homeLink" onClick={onLinkClick}/>
            <NavLink to="/prestations-tarifs" content="Mes prestations & Tarifs" id="navbar-servicesLink" onClick={onLinkClick}/>
            <NavLink to="/galerie-photos" content="Galerie photos" id="navbar-galleryLink" onClick={onLinkClick}/>
            <NavLink to="/a-propos" content="À propos" id="navbar-aboutLink" onClick={onLinkClick}/>
            <NavLink to="/contact" content="Contact" id="navbar-contactLink" onClick={onLinkClick}/>
            <PhoneButton className="header-phone-btn"/>
        </nav>
    );
}

export default Navbar;