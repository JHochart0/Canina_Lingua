import React, { useEffect } from 'react';

import '../css/Legal.css';

import NavLink from "../components/NavLink.jsx";

// legal & privacy politics page
function Legal() {
    // change the title
    useEffect(() => {
        document.title = "Canina Lingua - Mentions légales et politique de confidentialité";
    }, []);

    return (
        <div className="legal-container">
            <h1>Mentions légales et politique de confidentialité</h1>

            {/* Part 1: Legal section*/}
            <div className="legal-section">
                <h2>Mentions légales</h2>
                <div className="legal-section-text">
                    <p><strong>Nom commercial : </strong>nom commercial</p>
                    <p><strong>Représentant légal et Directeur de la publication : </strong>nom directeur structure</p>
                    <p><strong>Adresse : </strong>adresse complète</p>
                    <p><strong>Numéro de téléphone : </strong>06 XX XX XX XX</p> 
                    <p><strong>Adresse électronique : </strong>entreprise@gmail.com</p>
                </div>
            </div>

            {/* Part 2: privacy section */}
            <div className="privacy-section">
                <h2>Politique de confidentialité</h2>
                <div className="privacy-section-text">
                    <p>
                        En conformité avec le règlement n°2016/679, dit Règlement général pour la protection des données (RGPD) et la loi
                        n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, les données à caractère
                        personnel recueillies sur le site de l’entreprise font l’objet d’une déclaration auprès du Délégué à la Protection des
                        données (DPO) de l’entreprise. Elles sont exclusivement à usage interne de l’entreprise.
                    </p>
                    <p>
                        Les données personnelles collectées par l’entreprise peuvent l’être pour différentes finalités, selon les pages du site et
                        les formulaires de recueil concernés.
                    </p>
                    <p>
                        Principalement, il s’agit de la gestion des demandes d’information. Les données sont conservées pendant toute la durée
                        de la relation établie, et jusqu’à 3 ans maximum après, selon la nature de la relation concernée.
                    </p>
                    <p>
                        Pour assurer l'acheminement et le traitement technique de vos messages, le formulaire de contact utilise le service tiers <a href="https://formsubmit.co/">FormSubmit.co</a>. Les données que vous y saisissez (Nom/Entreprise, e-mail, sujet et message) lui sont temporairement transmises de manière sécurisée dans le seul but de nous les délivrer par courrier électronique. Ce prestataire agit en tant que sous-traitant technique et s'engage contractuellement à ne jamais céder, vendre ou exploiter vos informations à des fins commerciales ou publicitaires.
                    </p>
                    <p>
                        Les données ainsi collectées ne seront ni cédées, ni échangées ou louées. Conformément aux textes susvisés, vous
                        disposez d'un droit d’opposition, d'accès, de rectification, de suppression, de limitation ou de portabilité portant sur les
                        données vous concernant.
                    </p>
                    <p>
                        Ces droits peuvent être exercés en vous adressant à : <strong>Jovany Hochart</strong>, Correspondant Informatique et libertés, WebUniv, 102 rue Neuve, 62100 Calais, France en précisant dans l’objet du courrier « Droit des personnes » et en joignant la copie de votre
                        justificatif d’identité :
                    </p>
                    <ul>
                        <li>soit directement sur le site, via la page de <NavLink to="/contact" content="Contact" id=""/></li>
                        <li>soit par courriel : <strong>webuniv.pro@gmail.com</strong></li>
                        <li>soit en écrivant à : <strong>WebUniv - Jovany Hochart, 102 rue Neuve, 62100 Calais, France</strong></li>
                    </ul>
                </div>   
            </div>

            {/* Part 3: pricing, Host et credits */}
            <div className="hosting-section">
                <h2>Hébergement, Tarification et crédits</h2>
                <div className="hosting-section-text">

                    <h3>Centre serveur et nom de domaine :</h3>
                    <p>
                        Le site et son centre serveur sont hébergés par <strong>Cloudflare Pages</strong> (<a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a>, Inc.), 
                        dont le siège social est situé : <strong>101 Townsend St, San Francisco, CA 94107, États-Unis.</strong>
                    </p>
                    <p>
                        Le nom de domaine <a href="">www.nomdomaine.fr</a> est enregistré et géré par <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer">OVHcloud</a>, dont le siège social est établi : <strong>2 rue Kellermann, 59100 Roubaix, France.</strong>
                    </p>

                    <h3>Conception et développement du site :</h3>
                    <p><strong>WebUniv</strong> - Jovany Hochart</p>
                    <p><strong>Liens de contact :</strong></p>
                    <p>
                        <a href="mailto:webuniv.pro@gmail.com">Envoyer un mail</a> | <a href="https://www.webuniv.fr">Autre contact</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Legal;