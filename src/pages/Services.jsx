
import React, { useEffect } from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import servicesGroups from "../data/servicesGroups.js";
import "../css/Services.css";

import baladePlageImage from "../assets/img/img_prestations/Canina_Lingua_prestation_balade_plage.webp";

function Services() {
    useRevealOnScroll(
        ".fade-in-up, .fade-in-side-left, .fade-in-side-right", servicesGroups
    );



    useEffect(() => {
        document.title = "Canina Lingua - Mes prestations & Tarifs";
    }, []);

    return (
        <div className="services-container">
            
            {/*services hero banner*/}
            <div className="services-hero-banner fade-in-up">
                <div className="services-hero-banner-overlay"></div>

                <div className="services-hero-banner-card">
                    <div className="services-hero-paw-bg"></div>

                    <h1 className="services-hero-banner-title">
                        Mes prestations & tarifs
                    </h1>

                    <p className="services-hero-banner-subtitle">
                        Découvrez mes prestations d'éducation canine à domicile,
                        mes bilans comportementaux et mes activités en extérieur.
                        Une approche positive, éthique et éthologique, attentive
                        aux besoins et aux émotions de votre chien, dans son
                        environnement quotidien.
                    </p>

                    <div className="services-hero-banner-stats">
                        <div className="services-stat-item">
                            <span className="services-stat-value">
                                100% Environnements réels
                            </span>

                            <span className="services-stat-label">
                                À domicile & lieux de balade quotidiens
                            </span>
                        </div>

                        <div className="services-stat-divider"></div>

                        <div className="services-stat-item">
                            <span className="services-stat-value">
                                Un suivi sur-mesure
                            </span>

                            <span className="services-stat-label">
                                Séances, forfaits & balades collectives
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main services content */}
            <div className="services-content">
                {/* Intro & philosophy */}
                <div className="services-intro fade-in-up">
                    <p className="services-eyebrow">
                        L'approche Canina Lingua
                    </p>

                    <h2 className="services-main-title">
                        L'éducation dans le sens du poil
                    </h2>

                    <p className="services-intro-text">
                        Chaque chien est un individu à part entière. Pour vous
                        accompagner, l’objectif est de mieux comprendre ses besoins,
                        sa communication et ce qu’il ressent, afin de construire
                        une relation plus harmonieuse au quotidien.
                    </p>

                    <div className="services-philosophy fade-in-side-left">
                        <div
                            className="services-philosophy-mark"
                            aria-hidden="true"
                        >
                            “
                        </div>

                        <div className="services-philosophy-content">
                            <h3>Une méthode éthique et éthologique</h3>

                            <p className="services-philosophy-subtitle">
                                Comprendre pour entreprendre
                            </p>

                            <p>
                                Je ne travaille pas uniquement sur les apprentissages,
                                mais également sur les émotions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* services catalog */}
                <div className="services-catalog">
                    {servicesGroups.map((group, groupIndex) => (
                        <div
                            className={`services-group services-group--${group.layout}`}
                            key={group.id}
                        >
                            <div className="services-group-heading fade-in-up">
                                <span className="services-eyebrow">
                                    {group.eyebrow}
                                </span>

                                <h2>{group.title}</h2>

                                <p>{group.introduction}</p>
                            </div>

                            <div
                                className={`services-grid services-grid--${group.layout}`}
                            >
                                {group.services.map((service, serviceIndex) => (
                                    <ServiceCard
                                        key={service.id}
                                        service={service}
                                        index={serviceIndex + groupIndex}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* services area */}
                <div className="services-area ">
                    <div className="services-area-image fade-in-side-left">
                        <img
                            className="services-area-photo"
                            src={baladePlageImage}
                            alt="Un chien en balade dans un espace naturel de la Côte d'Opale"
                            loading="lazy"
                        />
                    </div>

                    <div className="services-area-content fade-in-side-right">
                        <span className="services-eyebrow">
                            À domicile et en extérieur
                        </span>

                        <h2>Un accompagnement dans votre quotidien</h2>

                        <p className="services-area-description">
                            Les séances à domicile permettent de travailler dans
                            l’environnement habituel de votre chien. Les balades
                            se déroulent sur des sites naturels de la Côte d’Opale
                            ou dans des lieux adaptés aux objectifs de la séance.
                        </p>

                        <div className="services-area-distance">
                            <span className="services-distance-number">
                                40 km
                            </span>

                            <div>
                                <strong>Zone d'intervention principale</strong>
                                <p>Autour de Boulogne-sur-Mer</p>
                            </div>
                        </div>

                        <p className="services-area-note">
                            Des interventions peuvent être envisagées jusqu’à
                            60 km, avec des frais supplémentaires au-delà de la
                            zone principale.
                        </p>

                        <NavLink
                            to="/contact"
                            content="Me contacter pour en discuter"
                            id="services-area-contact"
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="services-contact-cta fade-in-up">
                    <div
                        className="services-cta-paw"
                        aria-hidden="true"
                    ></div>

                    <span className="services-eyebrow">
                        Chaque chien est différent
                    </span>

                    <h2>Quelle prestation correspond à vos besoins ?</h2>

                    <p>
                        Une question sur une séance, un bilan ou une activité ?
                        Prenons le temps d'échanger sur votre situation et sur
                        les besoins de votre compagnon.
                    </p>

                    <NavLink
                        to="/contact"
                        content="Contacter Canina Lingua"
                        id="services-main-contact"
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;