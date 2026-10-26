
import React from "react";
import NavLink from "./NavLink.jsx";

function ServiceCard({ service, index }) {
    return (
        <div
            className="service-card-reveal fade-in-up"
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
        >
            <article className={`service-card service-card--${service.id}`}>
                <div
                    className={`service-card-image ${
                        service.image ? "service-card-image--photo" : ""
                    }`}
                >
                    <img
                        className="service-card-photo"
                        src={service.image}
                        alt={service.imageHint}
                        loading="lazy"
                    />
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
                        content={service.cta}
                        id={`service-contact-${service.id}`}
                    />
                </div>
            </article>
        </div>
    );
}

export default ServiceCard;
