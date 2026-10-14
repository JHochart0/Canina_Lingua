import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import PhoneButton from './PhoneButton';
import Schedules from './Schedules';

import '../css/Footer.css';

function Footer() {
  const googleReviewsUrl = "";

  return (
    <footer className="footer-container">
        <div className="footer-top">
            
        </div>

        {/*legal part of the footer*/}
        <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} Tous droits réservés | Canina Lingua</p>
            <NavLink to="/mentions-legales" content="Mentions légales et politique de confidentialité" id="footer-legalLink" />
        </div>
    </footer>
  );
}

export default Footer;