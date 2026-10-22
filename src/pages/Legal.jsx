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
                    <p><strong>Nom commercial : </strong>Canina Lingua</p>
                    <p><strong>Forme Juridique : </strong>Entrepreneur individuel</p>
                    <p><strong>Forme d'exercice </strong>Libérale non règlementée, Commerciale, Artisanale</p>
                    <p><strong>Représentant légal et Directeur de la publication : </strong>LEVEL David, Philippe, Francis</p>
                    <p><strong>SIREN : </strong>888 209 483</p>
                    <p><strong>SIRET (siège) : </strong>888 209 483 00021</p>
                    <p><strong>Date d'immatriculation au RNE : </strong>20/08/2020</p>
                    <p><strong>Date de début d'activité : </strong>08/09/2020</p>
                    <p><strong>Activité principale : </strong>Education comportementaliste canin en clientèle et vente d'articles et accessoires pour animaux.</p>
                    <p><strong>Code APE : </strong>9609Z - Autres services personnels n.c.a.</p>
                    <p><strong>Code APRM : </strong>9609ZP - Toilettage d'animaux de compagnie</p>
                    
                    <p><strong>Adresse de l'entreprise : </strong>16 rue de l'Amiral Courbet, Appartement 5, 62480 Le Portel, France</p> 
                    <p><strong>Numéro de téléphone : </strong>06 61 97 01 16</p> 
                    <p><strong>Adresse électronique : </strong>david.level@caninalingua.fr</p>
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
                        Ces droits peuvent être exercés en vous adressant directement au responsable du traitement des données, <strong>David Level (Canina Lingua)</strong>, en précisant dans l'objet de votre demande « Droit des personnes (RGPD) » :
                    </p>
                    <ul>
                        <li>Soit directement sur le site, via notre page de <NavLink to="/contact" content="Contact" id=""/></li>
                        <li>Soit par e-mail : <strong>david.level@caninalingua.fr</strong></li>
                        <li>Soit par voie postale en écrivant à : <strong>Canina Lingua - David Level, 16 rue de l'Amiral Courbet, Appartement 5, 62480 Le Portel, France</strong></li>
                    </ul>
                </div>   
            </div>

            {/* Part 3: pricing, Host et credits */}
            <div className="hosting-section">
                <h2>Hébergement et crédits</h2>
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
                        <a href="mailto:webuniv.pro@gmail.com">Envoyer un mail</a> | <a href="https://www.webuniv.fr/contact">Autre contact</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Legal;