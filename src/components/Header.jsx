import React, { useState, useEffect, useRef } from 'react';
import '../css/Header.css';
import Navbar from './Navbar';
import Logo from './Logo';

// Component for the header on every page of the website
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Manage the header visibility
    
    const headerRef = useRef(null);
    const lastScrollY = useRef(0); // Stores the last scroll position without triggering a re-render

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Effect to hide/show the header on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isMenuOpen) {
                setIsVisible(true);
            } else if (
                currentScrollY > lastScrollY.current &&
                currentScrollY > 500
            ) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // Effect to close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <div className="full-header-container">
                <div className="header-banner-container">
                    <Logo />
                </div>
            </div>

            <header
                className={`header-container ${!isVisible ? 'header-hidden' : ''}`}
                ref={headerRef}
            >   
                <div className="header-wrap">
                    <div className="burger-wrapper">
                        <button
                            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Ouvrir le menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                    
                    <Navbar
                        className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}
                        onLinkClick={closeMenu}
                    />
                </div>
            </header>
        </>

    );
}

export default Header;