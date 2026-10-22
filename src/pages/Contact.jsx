import React, { useEffect, useState } from 'react';
import '../css/Contact.css';

import useRevealOnScroll from '../hooks/useRevealOnScroll';

import Schedules from '../components/Schedules';
import NavLink from '../components/NavLink';
import PhoneButton from '../components/PhoneButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    // Scroll reveal animation initialization
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    // Set page title on component mount
    useEffect(() => {
        document.title = "Canina Lingua - Contactez-moi !";
    }, []);

    // Form input state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Form submission status state
    const [status, setStatus] = useState({ loading: false, success: null });

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission via FormSubmit AJAX endpoint
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null });

        // Send AJAX request to avoid external page redirection
        fetch("https://formsubmit.co/your@email.com", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                ...formData,
                _subject: `Nouveau message de contact : ${formData.subject}`,
                _template: "table"
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === "true") {
                setStatus({ loading: false, success: true });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form input fields
            } else {
                setStatus({ loading: false, success: false });
            }
        })
        .catch(() => {
            setStatus({ loading: false, success: false });
        });
    };

    return (
        <div className="contact-container">
            
            {/* Contact Hero Banner */}
            <div className="contact-hero-banner fade-in-up">
                <div className="contact-hero-banner-overlay"></div>
                
                <div className="contact-hero-banner-card">
                    <div className="contact-hero-paw-bg"></div>
                    
                    <h1 className="contact-hero-banner-title">Contact</h1>
                    
                    <p className="contact-hero-banner-subtitle">
                        Un projet d'éducation, un comportement à ajuster ou une simple question ? N'hésitez pas à nous écrire ou à nous appeler.
                    </p>

                    <div className="contact-hero-banner-stats">
                        <div className="contact-stat-item">
                            <span className="contact-stat-value">Sur rendez-vous</span>
                            <span className="contact-stat-label">Bilan & Séances</span>
                        </div>
                        <div className="contact-stat-divider"></div>
                        <div className="contact-stat-item">
                            <span className="contact-stat-value">À Domicile</span>
                            <span className="contact-stat-label">Boulogne-sur-Mer & Alentours</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Contact Wrapper */}
            <div className="contact-wrap">
                
                {/* Left Side: Information & Direct Contact Details */}
                <div className="contact-infos-side fade-in-side-left">
                    <h1 className="contact-infos-title">Informations</h1>
                    
                    <h2 className="contact-infos-subtitle">Infos pratiques & Coordonnées</h2>
                    
                    <p className="contact-infos-desc">
                        Retrouvez ici l'ensemble des informations pratiques concernant nos déplacements, nos horaires d'ouverture et nos moyens de contact direct.
                    </p>

                    {/* Intervention Zone Section */}
                    <div className="contact-zone-section">
                        <h3 className="contact-zone-title">
                            <FontAwesomeIcon icon={faLocationDot} className="contact-zone-icon" />
                            Boulogne-sur-Mer et ses alentours
                        </h3>
                        <p className="contact-zone-details">
                            Déplacements jusqu'à <strong>40 km</strong> autour.
                            <br />
                            <em>(Possibilité d'intervention jusqu'à <strong>60 km</strong> avec frais supplémentaires).</em>
                        </p>
                    </div>

                    {/* Direct Contact Buttons (Phone & Email) */}
                    <div className="contact-direct-actions">
                        <PhoneButton className="contact-direct-btn" />
                        
                        <a href="mailto:david.level@caninalingua.fr" className="contact-direct-btn">
                            <FontAwesomeIcon className="contact-direct-icon" icon={faEnvelope} />
                            <span>david.level@caninalingua.fr</span>
                        </a>
                    </div>

                    {/* Opening Hours Section */}
                    <Schedules className="contact-infos"/>

                    {/* Social Media Links Section */}
                    <div className="contact-socials-section">
                        <h2 className="contact-socials-title">Rejoignez mes réseaux sociaux</h2>
                        <div className="contact-socials-links">
                            <a href="https://www.facebook.com/caninalingua62/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com/caninalingua/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Right Side: Contact Form Section */}
                <div className="contact-form-section fade-in-side-right">
                    <h1 className="contact-form-title">Me contacter</h1>
                    <form onSubmit={handleSubmit} className="contact-form-element">
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="contact-form-group">
                            <label htmlFor="name">Nom / Entreprise*</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Saisissez votre nom..."
                                required 
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">Adresse E-mail*</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Saisissez votre adresse e-mail..."
                                required 
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="subject">Sujet du message*</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                placeholder="Ex: Bilan comportemental, éducation canine..."
                                required 
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="message">Votre Message*</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Décrivez brièvement vos besoins, vos idées..."
                                required
                            ></textarea>
                        </div>
                        <p className="contact-form-note">* Champs obligatoires</p>

                        <p className="contact-privacy-text">
                            En soumettant ce formulaire, vous acceptez que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation professionnelle qui peut en découler. Pour en savoir plus, consultez notre <NavLink to="/legal" content="Politique de confidentialité"/>.
                        </p>

                        <div className="contact-form-actions">
                            <button type="submit" className="contact-submit-btn" disabled={status.loading}>
                                {status.loading ? "Transmission en cours..." : "Envoyer le message"}
                            </button>

                            {status.success === true && (
                                <p className="contact-alert success">✨ Message envoyé avec succès ! Nous revenons vers vous au plus vite.</p>
                            )}
                            {status.success === false && (
                                <p className="contact-alert error">❌ Une erreur est survenue. Merci de réessayer ou d'utiliser le mail direct.</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;