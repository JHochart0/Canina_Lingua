import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../assets/img/Canina_Lingua_Logo_Full.webp';

//this component is the logo of the website that brings to the homepage when clicked on
function Logo() {
    return (
        <NavLink to="/" content="" className="logo">
            
                <div className="logo-img-wrapper">
                    <img src={logo} alt="Logo Canina Lingua" className="logo-img" />
                </div>
                <div className="logo-text-container">
                    <h1 className="logo-title">Canina Lingua</h1>
                    <h4 className="logo-subtitle">Éducateur comportementaliste canin</h4>
                </div>
            
        </NavLink>
    );
}

export default Logo;