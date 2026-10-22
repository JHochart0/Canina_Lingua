import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import PhoneButton from './PhoneButton';
import Schedules from './Schedules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

import '../css/Footer.css';

function Footer() {
    const googleReviewsUrl = "https://www.google.com/search?q=canina+lingua+david+level+et+zira+le+portel+reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_9Zsun5m37PztBJzp5qc-5jorky2xirCMiC7kLdwGPYqg43QsoF97rHBb00gbFKaZgRm2V1oajM-J2RP6hn35aVm2GxObzA6EZY4njtd5Kep_p2UT9PTZtoBI0nv1Oz08tt_PkdM1x7I3YFItLAxCXEq-_O6j-TqvLXKGWe1CkZ_llsaKE7Y6xdkE_Hq9a4-PaPualP_fSeSBcEWqbl7axbq-DpP#sv=CAESzQEKuQEStgEKd0FKaVQ0dEotaFhEdnhmMzEwbG9rXzR1bTV2QmhkdTVfUi1qTmJDMEdYREszOUl1WVI4MUhoLTJzZUdOWWpnZjBEWGVMMEhIRDNfX0RvdGRKcW0xZHJEMGJvcGEwQ2w5c2tIYnJhQ0NfNndUTC00LXlzUlltbk1ZEhc4Y3ZSYXRUZENLdlk3TThQNE82YXdRaxoiQURzcjlmU0RTU1RzV2hKdlVfOTM0a1V6MEFieU9BWXk4QRIEODA1MRoBMyoAMAA4AUAAGAAg3PbzrApKAhAB";

    return (
        <footer className="footer-container">
            <div className="footer-top">
                {/* Reviews section */}
                <div className="footer-reviews">
                    <h3 className="footer-reviews-title">Avis Clients</h3>
                    
                    <div className="footer-stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>

                    <a 
                        href={googleReviewsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-reviews-btn"
                    >
                        Voir les avis
                    </a>
                </div>

                {/* Brand section*/}
                <div className="footer-brand">
                    <Logo />
                    <PhoneButton className="footer-phone-btn" />
                    
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/caninalingua62/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/caninalingua/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                {/* Schedules section */}
                <Schedules className="footer" />
            </div>

            {/*legal part of the footer*/}
            <div className="footer-bottom">
                <NavLink to="/conditions-generales-de-ventes" content="Conditions générales de ventes" id="footer-gtcLink" />
                <p className="footer-copyright">© {new Date().getFullYear()} Tous droits réservés | Canina Lingua</p>
                <NavLink to="/mentions-legales" content="Mentions légales et politique de confidentialité" id="footer-legalLink" />
            </div>
        </footer>
  );
}

export default Footer;