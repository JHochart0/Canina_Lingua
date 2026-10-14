import React, { useEffect, useState } from 'react';
import '../css/Contact.css';

import useRevealOnScroll from '../hooks/useRevealOnScroll';

import Schedules from '../components/Schedules';
import NavLink from '../components/NavLink';



function Contact() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    useEffect(() => {
        document.title = "Canina Lingua - Contactez-moi !";
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({ loading: false, success: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // handle the submit button of the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null });

        // Send AJAX to FormSubmit to avoid any external redirection
        fetch("https://formsubmit.co/your@email.com ", {
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
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset
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
            <div className="contact-wrap">
                <div className="contact-form-section">
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
                                placeholder="Ex: Création de site internet, demande de renseignement..."
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