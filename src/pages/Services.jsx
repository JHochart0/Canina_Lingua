
import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";
import '../css/Services.css';

// Prestations et tarifs communiqués par le client.
// Les descriptions sont provisoires et pourront être ajustées par David.
const serviceGroups = [
    {
        id: "bilans",
        eyebrow: "Faire le point",
        title: "Bilans et premiers repères",
        introduction:
            "Mieux comprendre votre chien, ses besoins et les situations que vous rencontrez au quotidien.",
        layout: "two",
        services: [
            {
                id: "bilan-chiot",
                name: "Bilan chiot",
                duration: "2 h 30",
                price: "70 €",
                imageHint: "Un chiot qui découvre son environnement",
                tag: "Pour bien démarrer",
                description:
                    "Un premier rendez-vous pour découvrir les besoins fondamentaux du chiot, les principes d’apprentissage et les bases d’une relation sereine.",
                details: [
                    "Comprendre les besoins du chiot et ses signaux de communication.",
                    "Découvrir les principes d’apprentissage.",
                    "Aborder les premières difficultés et prévenir certaines problématiques.",
                    "Commencer à apprendre le langage du chien pour mieux le comprendre."
                ]
            },
            {
                id: "bilan-comportemental",
                name: "Bilan comportemental",
                duration: "2 h 30",
                price: "80 €",
                imageHint: "Un chien accompagné par son humain",
                tag: "Comprendre les difficultés",
                description:
                    "Un temps d’échange et d’observation pour cerner vos attentes, identifier les problématiques rencontrées et commencer à comprendre le comportement de votre chien.",
                details: [
                    "Faire le point sur votre quotidien et votre relation.",
                    "Identifier les situations qui posent problème.",
                    "Découvrir les premiers conseils et les bases de la communication canine."
                ]
            }
        ]
    },
    {
        id: "accompagnement",
        eyebrow: "Progresser ensemble",
        title: "Éducation et rééducation",
        introduction:
            "Un accompagnement adapté à votre binôme, en tenant compte du contexte réel et des émotions de votre chien.",
        layout: "two",
        services: [
            {
                id: "seance-education",
                name: "Séance d’éducation ou de rééducation",
                duration: "1 h 30",
                price: "50 €",
                imageHint: "Un exercice d’éducation dans un environnement quotidien",
                tag: "Séance individuelle",
                description:
                    "Une séance à domicile ou dans un lieu défini ensemble pour travailler les apprentissages, améliorer le quotidien ou accompagner une difficulté comportementale.",
                details: [
                    "Travailler sur des objectifs définis avec vous.",
                    "Adapter les exercices à votre chien et à son environnement.",
                    "Prendre en compte ses émotions et ses signaux de communication."
                ]
            },
            {
                id: "forfait-5-seances",
                name: "Forfait 5 séances",
                duration: "5 séances",
                price: "220 €",
                imageHint: "Un chien et son humain qui progressent ensemble",
                tag: "Un suivi dans la durée",
                description:
                    "Un forfait pour poursuivre le travail engagé au fil de plusieurs séances et accompagner progressivement les évolutions de votre chien.",
                details: [
                    "Cinq séances d’accompagnement.",
                    "Des objectifs de travail qui évoluent au fil du suivi.",
                    "Une attention portée à la relation et aux progrès du binôme."
                ]
            }
        ]
    },
    {
        id: "activites",
        eyebrow: "Apprendre sur le terrain",
        title: "Balades et découverte d’activités",
        introduction:
            "Des expériences en extérieur pour mieux lire les comportements, développer la compréhension mutuelle et découvrir de nouvelles activités.",
        layout: "three",
        services: [
            {
                id: "balade-sociale",
                name: "Balade sociale",
                duration: "Balade en extérieur",
                price: "20 €",
                imageHint: "Plusieurs chiens en balade dans la nature",
                tag: "Socialité canine",
                description:
                    "Une balade pour observer les interactions entre chiens et mieux comprendre leurs comportements et leur communication, dans un cadre adapté.",
                details: [
                    "Observer les interactions entre congénères.",
                    "Apprendre à mieux lire les signaux de communication.",
                    "Partager un moment de balade dans un environnement naturel."
                ]
            },
            {
                id: "balade-pedagogique",
                name: "Balade pédagogique",
                duration: "Balade en extérieur",
                price: "20 €",
                imageHint: "Un chien qui explore un sentier avec son humain",
                tag: "Apprendre autrement",
                description:
                    "Une balade qui associe découverte de l’environnement, observation du chien et mise en pratique de certains apprentissages du quotidien.",
                details: [
                    "Travailler certains apprentissages en situation réelle.",
                    "Mieux comprendre les réactions et les besoins de votre chien.",
                    "Apprendre à observer la communication canine."
                ]
            },
            {
                id: "mantrailing",
                name: "Stage d’initiation au mantrailing",
                duration: "Stage d’initiation",
                price: "30 €",
                imageHint: "Un chien qui suit une piste olfactive en extérieur",
                tag: "Découverte olfactive",
                description:
                    "Une première découverte du mantrailing, une activité de pistage dans laquelle le chien apprend à suivre une piste olfactive.",
                details: [
                    "Découvrir une activité de pistage canin.",
                    "Mettre en valeur les capacités olfactives du chien.",
                    "Explorer une nouvelle façon de coopérer avec votre compagnon."
                ]
            }
        ]
    }
];

function ServiceCard({ service, index }) {
    return (
        <article
            className={`service-card fade-in-up service-card--${service.id}`}
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
        >
            <div
                className="service-card-image"
                role="img"
                aria-label={service.imageHint}
            >
                <span className="service-image-label">
                    Photo à ajouter
                </span>
                <span className="service-image-hint">
                    {service.imageHint}
                </span>
            </div>

            <div className="service-card-content">
                <div className="service-card-heading">
                    <span className="service-card-tag">
                        {service.tag}
                    </span>
                    <h3>{service.name}</h3>
                </div>

                <div className="service-card-meta">
                    <span className="service-duration">
                        {service.duration}
                    </span>
                    <span className="service-price">
                        {service.price}
                    </span>
                </div>

                <p className="service-card-description">
                    {service.description}
                </p>

                <ul className="service-card-details">
                    {service.details.map((detail, detailIndex) => (
                        <li key={`${service.id}-detail-${detailIndex}`}>
                            {detail}
                        </li>
                    ))}
                </ul>

                <NavLink
                    to="/contact"
                    content="Parler de mon besoin"
                    id={`service-contact-${service.id}`}
                />
            </div>
        </article>
    );
}

function Services() {
    useRevealOnScroll(
        ".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation"
    );

    useEffect(() => {
        document.title = "Prestations & tarifs | Canina Lingua";
    }, []);

    return (
        <div className="services-container">
            {/* Bannière existante conservée */}
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

            {/* Introduction et philosophie */}
            <section className="services-intro fade-in-up">
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

                <div className="services-philosophy">
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
            </section>

            {/* Catalogue des prestations */}
            <div className="services-catalog">
                {serviceGroups.map((group, groupIndex) => (
                    <section
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
                    </section>
                ))}
            </div>

            {/* Zone d'intervention */}
            <section className="services-area fade-in-up">
                <div className="services-area-image">
                    <div
                        className="services-area-photo-placeholder"
                        role="img"
                        aria-label="Photo à ajouter : balade canine dans la nature sur la Côte d'Opale"
                    >
                        <span>Photo à ajouter</span>
                        <p>Une balade sur la Côte d'Opale</p>
                    </div>
                </div>

                <div className="services-area-content">
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
            </section>

            {/* Conclusion et appel à l'action */}
            <section className="services-contact-cta fade-in-up">
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
            </section>
        </div>
    );
}

export default Services;
