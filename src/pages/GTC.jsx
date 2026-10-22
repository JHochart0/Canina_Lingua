
import React, { useEffect } from 'react';
import NavLink from "../components/NavLink.jsx";
import '../css/GTC.css';

// Conditions générales de vente
function GTC() {
    useEffect(() => {
        document.title = "Canina Lingua - Conditions générales de vente";
    }, []);

    return (
        <main className="GTC-container">
            <h1>Conditions générales de vente</h1>

            <div className="gtc-section">
                <h2>Article 1 – Mission, prestataire et client</h2>
                <div className="gtc-section-text">
                    <p>
                        L’entreprise CANINA LINGUA est représentée par David LEVEL,
                        qui exerce une activité d’éducation et de comportementalisme canin.
                    </p>
                    <p>
                        L’entreprise CANINA LINGUA a vocation à se voir confier des
                        missions de séances d’éducation et de rééducation comportementale
                        canine, de bilan comportemental, de stages de pistage, de balades
                        sociales et pédagogiques, de conseils et de coaching sur la
                        relation humain/chien.
                    </p>
                    <p>
                        Par la suite, l’entreprise CANINA LINGUA est désignée dans
                        l’ensemble des documents contractuels par la formule
                        « l’entreprise ».
                    </p>
                    <p>
                        Symétriquement, la personne pour le compte de laquelle la
                        prestation de service est mise en œuvre ou à laquelle la
                        marchandise est vendue est désignée dans l’ensemble des
                        documents contractuels par la formule « le client ».
                    </p>
                    <p>
                        Les présentes conditions générales de vente ont pour objet de
                        régir les relations contractuelles entre l’entreprise et ses
                        clients dans le cadre de son activité professionnelle.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 2 – Objet et champ d’application</h2>
                <div className="gtc-section-text">
                    <p>
                        Toute commande de prestations de services implique l’acceptation
                        sans réserve par le client et son adhésion pleine et entière aux
                        présentes conditions générales de vente qui prévalent sur tout
                        autre document, sauf négociation de conditions particulières
                        par l’entreprise.
                    </p>
                    <p>
                        Sauf conditions particulières conclues, les présentes Conditions
                        Générales de Vente s’appliquent de plein droit à toutes les
                        prestations de services.
                    </p>
                    <p>
                        Conformément au Code de la Consommation, les présentes conditions
                        sont mises à la disposition de tout demandeur.
                    </p>
                    <p>
                        Le fait que l’entreprise ne se prévale pas à un moment donné de
                        l’une quelconque des présentes conditions générales de vente ne
                        peut être interprété comme valant renonciation à se prévaloir
                        ultérieurement de l’une quelconque desdites conditions.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 3 – Tarifs et prix</h2>
                <div className="gtc-section-text">
                    <p>
                        Tout devis préalablement établi sera valable pour une durée
                        d’un mois.
                    </p>
                    <p>Ces tarifs sont réactualisables à tout moment.</p>
                    <p>
                        Les prix des prestations sont indiqués en euros, TVA comprise
                        (TTC : toutes taxes comprises).
                    </p>
                    <p>
                        En cas de déplacement supérieur à 30 km au départ du domicile
                        du prestataire, le déplacement sera facturé à hauteur de
                        0,50 € par kilomètre.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 4 – Paiement</h2>
                <div className="gtc-section-text">
                    <h3>1. Délai</h3>
                    <p>
                        Le règlement de la facture devra intervenir dès la réalisation
                        de la prestation.
                    </p>
                    <p>
                        L’entreprise n’entend consentir aucun escompte pour paiement
                        comptant ou à une date antérieure à celle résultant des présentes
                        conditions générales de vente.
                    </p>

                    <h3>2. Modalités</h3>
                    <p>
                        Les règlements seront effectués par chèque bancaire ou postal à l’ordre de <strong>"David Level - Canina Lingua"</strong>, par espèces ou par virement.
                    </p>

                    <h3>3. Retard de paiement</h3>
                    <p>
                        Toute somme non payée à l’échéance donnera lieu au paiement,
                        par le client, de pénalités de retard applicables conformément
                        à la réglementation en vigueur.
                    </p>
                    <p>
                        En outre, l’entreprise se réserve la faculté de saisir le
                        tribunal compétent afin que celui-ci fasse cesser cette
                        inexécution, sous astreinte par jour de retard.
                    </p>
                    <p>
                        En cas d’impayé dans le cadre d’une relation entre professionnels,
                        une indemnité forfaitaire de recouvrement de 40 € pourra être
                        due par le client, conformément à la réglementation applicable.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 5 – Devoir de conseil et obligation de moyens</h2>
                <div className="gtc-section-text">
                    <p>
                        Quelle que soit la mission confiée au prestataire et sans
                        préjudice des points particuliers régis par les conditions
                        particulières, le prestataire est débiteur d’un devoir de
                        conseil, dans la limite de ses compétences.
                    </p>
                    <p>
                        Ceci entraîne notamment l’obligation de mettre en œuvre tous les
                        moyens possibles pour remplir correctement la mission confiée,
                        en l’état des règles de l’art applicables à la mission confiée.
                    </p>
                    <p>
                        Il est toutefois précisé que, sous réserve des dispositions
                        législatives et réglementaires applicables, le prestataire
                        n’assume en tout état de cause qu’une obligation de moyens,
                        et non une obligation de résultat.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 6 – Convention sur la preuve</h2>
                <div className="gtc-section-text">
                    <p>
                        Les parties conviennent d’échanger entre elles par tous moyens
                        acceptés par le prestataire. Parmi ces moyens, le prestataire
                        inclut le recours à des télécommunications électroniques et/ou
                        dématérialisées dès lors que ces procédés sont communément
                        utilisés dans les relations commerciales établies avec le client.
                    </p>
                    <p>
                        Toutefois, en cas de désaccord sur leurs engagements respectifs,
                        elles conviennent d’organiser la valeur probante de leurs échanges
                        selon l’échelle dégressive suivante :
                    </p>
                    <ul>
                        <li>
                            Document électronique revêtu d’une signature électronique
                            sécurisée au sens du Code civil ;
                        </li>
                        <li>
                            Document électronique revêtu d’une signature électronique
                            simple ;
                        </li>
                        <li>Document papier original et signé ;</li>
                        <li>Document papier en copie signé ;</li>
                        <li>Document électronique non signé ;</li>
                        <li>Document papier non signé.</li>
                    </ul>
                    <p>
                        De même, lorsque le contrat qui les lie évoque la nécessité d’un
                        envoi de lettre recommandée avec accusé de réception, les parties
                        conviennent de recourir indifféremment à la lettre recommandée
                        avec accusé de réception sur papier, acheminée par la Poste, ou
                        à la lettre recommandée électronique, acheminée selon les
                        dispositions du Code civil.
                    </p>
                    <p>
                        Le client qui prétend ne pas avoir reçu un rapport doit en
                        réclamer une copie au prestataire. L’absence d’une telle
                        réclamation vaut preuve de la réception de ce rapport par le
                        client. Pour les rapports adressés au client de façon
                        dématérialisée, l’envoi du rapport électronique par le
                        prestataire suffit à établir la preuve que le client en a eu
                        connaissance.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 7 – Assurances</h2>
                <div className="gtc-section-text">
                    <p>
                        L’entreprise s’engage à souscrire une ou plusieurs polices
                        d’assurances couvrant les différentes responsabilités qu’elle
                        assume du fait des missions confiées.
                    </p>
                    <p>
                        Sur simple demande du client, l’entreprise s’oblige à fournir
                        les attestations d’assurance correspondantes.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 8 – Obligations du propriétaire</h2>
                <div className="gtc-section-text">
                    <p>
                        Le client devra être majeur et capable. Pour les personnes
                        mineures, elles devront être accompagnées d’une personne adulte,
                        majeure et capable, et obtenir au préalable l’autorisation de
                        l’entreprise pour participer à la séance, dans la mesure où
                        leur présence ne nuit pas au bon déroulement de la séance.
                        Les cours se dérouleront exclusivement avec les personnes
                        convenues au préalable avec l’entreprise. Dans le cas contraire,
                        l’entreprise se réserve le droit d’annuler la séance.
                    </p>
                    <p>
                        Le client s’engage à présenter un chien identifié (puce
                        électronique ou tatouage) et, dans le cas où le chien du client
                        est amené à être en contact avec d’autres congénères, devra
                        veiller à ce que sa vaccination et sa protection antiparasitaire
                        soient adaptées à son état de santé et aux activités prévues.
                    </p>
                    <p>
                        Les chiennes en chaleur ne sont pas admises dans les activités
                        en présence d’autres congénères susceptibles d’être perturbés
                        par ces dernières. Sous réserve d’acceptation, les chiennes en
                        chaleur pourront participer à des séances individuelles.
                    </p>
                    <p>
                        Avant la première prestation, le propriétaire d’un chien
                        catégorisé devra présenter les justificatifs requis par la
                        réglementation applicable, notamment ceux relatifs à
                        l’assurance responsabilité civile, à la déclaration en mairie,
                        au permis de détention et à la vaccination antirabique lorsque
                        ces obligations s’appliquent. Le chien devra être équipé et tenu
                        conformément à la réglementation en vigueur.
                    </p>
                    <p>
                        En cas d’annulation ou d’empêchement d’une séance, le client
                        devra prévenir l’entreprise au moins 24 heures à l’avance.
                        Dans le cas contraire, la séance pourra être considérée comme
                        accomplie et son paiement exigé.
                    </p>
                    <p>
                        Aucune prestation ne sera dispensée sans un règlement préalable
                        afin de prévenir d’éventuels impayés. Sauf indication contraire
                        du client, le règlement de la totalité des prestations sera
                        effectué avant leur dispense. À la suite de cela, l’entreprise
                        s’engage à assurer les prestations réglées.
                    </p>
                    <p>
                        Si ces obligations ne sont pas respectées, l’entreprise se
                        réserve le droit d’annuler la ou les prestations.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 9 – Méthode de prise en charge</h2>
                <div className="gtc-section-text">
                    <p>
                        Conformément aux règles applicables, la prise en charge lors des
                        interventions de l’entreprise se fera à l’aide de moyens ne
                        nuisant pas à l’intégrité physique ou psychologique du chien.
                        Si le client se refuse à respecter les indications de la loi et
                        de l’entreprise, l’entreprise se réserve le droit de mettre fin
                        à la séance et/ou au forfait en cours. Aucun collier
                        semi-étrangleur, étrangleur, électrique, torcatus ou autre
                        matériel de ce type ne sera accepté.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 10 – Responsabilités</h2>
                <div className="gtc-section-text">
                    <p>
                        Lors des séances, l’entreprise ne peut être tenue responsable
                        en présence du propriétaire si un problème survient.
                        L’entreprise se devra de tout mettre en œuvre en amont pour
                        prévenir au maximum les risques potentiels. Si toutefois un
                        problème devait survenir, le propriétaire en prendra la
                        responsabilité. Les risques encourus devront être annoncés
                        au préalable par l’entreprise et le choix reviendra alors au
                        propriétaire de prendre ou non les différents risques éventuels.
                    </p>
                    <p>
                        Les prestations fournies ont pour but de transmettre des
                        connaissances dans le domaine canin afin de permettre au client
                        de faire face aux divers troubles du comportement et demandes
                        d’éducation et/ou en prévention de ces derniers.
                    </p>
                    <p>
                        Dans ces conditions, l’entreprise ne saurait être considérée
                        comme responsable des incidents ou accidents survenant pendant
                        ou postérieurement à la période de prise en charge dus à une
                        mauvaise interprétation ou application du client.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 11 – Prestations</h2>
                <div className="gtc-section-text">
                    <p>
                        La durée d’une séance est comprise entre 1 heure et 1 h 30.
                        La séance peut se passer chez le client ou à l’extérieur.
                    </p>
                    <p>
                        La durée d’un bilan comportemental est de 2 h 30. Si
                        l’entreprise se déplace pour un problème lié à l’agressivité,
                        par souci de sécurité, le chien devra être mis dans une pièce
                        séparée le temps d’analyser la problématique et ne devra en
                        aucun cas être laissé libre lors de l’arrivée, sauf cas contraire.
                        En cas d’extrême nécessité, l’entreprise se donne le droit de
                        conseiller le replacement du ou des chiens.
                    </p>
                    <p>
                        La durée d’une balade sociale ou pédagogique est de 2 heures
                        dans des lieux autorisés aux chiens.
                    </p>
                    <p>
                        En cas de déplacement supérieur à 30 km au départ du domicile
                        du prestataire, le déplacement sera facturé à hauteur de
                        0,50 € par kilomètre.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 12 – Sous-traitance</h2>
                <div className="gtc-section-text">
                    <p>
                        D’une manière générale, l’entreprise a vocation à exécuter
                        personnellement les missions confiées.
                    </p>
                    <p>
                        Elle se réserve toutefois la possibilité d’en sous-traiter
                        tout ou partie, sous son entière responsabilité.
                    </p>
                    <p>
                        Elle s’oblige dans cette hypothèse à respecter les dispositions
                        de la loi relatives à la sous-traitance.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 13 – Confidentialité</h2>
                <div className="gtc-section-text">
                    <p>
                        L’entreprise s’engage à ne pas divulguer les informations,
                        documents d’ordre technique ou économique ni les résultats
                        obtenus.
                    </p>
                    <p>
                        Cette règle reçoit toutefois exception en cas de demande faite
                        par l’autorité administrative dans un cadre légal ou dans le
                        cadre des agréments et des délégations administratives que
                        détient l’entreprise.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 14 – Communication et références</h2>
                <div className="gtc-section-text">
                    <p>
                        Sauf opposition expresse du client, par simple écrit, celui-ci
                        accepte de figurer sur les listes de références de l’entreprise
                        ou que la prestation réalisée soit présentée sur tous les
                        supports de communication développés par l’entreprise.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 15 – Devoir de collaboration</h2>
                <div className="gtc-section-text">
                    <p>
                        Quelle que soit la mission confiée, et sans préjudice des points
                        particuliers régis par les conditions particulières, le client
                        est débiteur vis-à-vis du prestataire d’un devoir de collaboration
                        étendu, comportant notamment :
                    </p>
                    <p>
                        En amont de la mission : l’obligation de définir clairement ses
                        besoins et ses attentes. Ceci entraîne notamment l’obligation
                        de fournir en temps utile au prestataire l’ensemble des
                        informations qui lui sont nécessaires pour formuler son offre.
                    </p>
                    <p>
                        En cours de mission : l’obligation de fournir au prestataire les
                        moyens adéquats, en matériel et en personnes habilitées, pour
                        exécuter la mission. À ce titre, le client conservera la direction,
                        l’usage, la garde et la responsabilité des installations,
                        équipements et appareils concernés. Si, à titre exceptionnel,
                        le prestataire est amené à manipuler lui-même, pour les besoins
                        de sa mission, les équipements du client, les parties s’accordent
                        pour reconnaître que ce dernier en conserve la garde.
                    </p>
                    <p>
                        L’intervention manuelle du prestataire ne lui confère dans cette
                        hypothèse que la qualité de préposé occasionnel du client.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 16 – Résiliation</h2>
                <div className="gtc-section-text">
                    <p>
                        En cas de manquement par l’une des parties à l’une des obligations
                        à sa charge, dont le paiement des factures, l’autre partie pourra
                        interrompre l’exécution des prestations engagées après l’envoi
                        à la partie défaillante d’une mise en demeure d’avoir à remédier
                        audit manquement, sous la forme recommandée avec accusé de
                        réception restée sans effet.
                    </p>
                    <p>
                        En cas d’interruption anticipée des prestations, quelle qu’en
                        soit la cause, les sommes déjà perçues par le prestataire lui
                        resteront acquises et les factures correspondant aux travaux
                        engagés lui seront dues.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 17 – Force majeure</h2>
                <div className="gtc-section-text">
                    <p>
                        La survenance d’un cas de force majeure a pour effet de suspendre
                        l’exécution des obligations contractuelles de l’entreprise.
                    </p>
                    <p>
                        Est un cas de force majeure tout événement indépendant de la
                        volonté de l’entreprise et faisant obstacle à son fonctionnement
                        normal.
                    </p>
                    <p>
                        Constituent notamment des cas de force majeure les grèves totales
                        ou partielles entravant la bonne marche de l’entreprise ou celle
                        de l’un des fournisseurs, sous-traitants ou transporteurs, ainsi
                        que l’interruption des transports, de la fourniture d’énergie,
                        de matières premières ou de pièces détachées.
                    </p>
                    <p>
                        Dans de telles circonstances, l’entreprise préviendra le client,
                        par écrit, dans les 24 heures de la date de survenance des
                        événements. Le contrat liant l’entreprise et le client sera
                        suspendu de plein droit, sans indemnité, à compter de la date
                        de survenance de l’événement.
                    </p>
                    <p>
                        Si l’événement venait à durer plus de 30 jours à compter de la
                        date de survenance de celui-ci, le contrat conclu entre
                        l’entreprise et le client pourra être résilié par la partie la
                        plus diligente, sans qu’aucune des parties puisse prétendre à
                        l’octroi de dommages et intérêts.
                    </p>
                    <p>
                        Le sort des acomptes déjà versés dépend de la nature de la
                        commande et de la situation de force majeure.
                    </p>
                    <p>
                        Cette résiliation prendra effet à la date de la première
                        présentation de la lettre recommandée avec accusé de réception
                        dénonçant le contrat.
                    </p>
                    <p>
                        Les parties conviennent qu’en cas de force majeure, leurs
                        responsabilités respectives ne pourront être recherchées. À cette
                        fin, elles conviennent de considérer comme constituant des cas
                        de force majeure les cas reconnus comme tels par les tribunaux.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>Article 18 – Contestation et compétence de juridiction</h2>
                <div className="gtc-section-text">
                    <p>
                        EN CAS DE DIFFEREND RELATIF A L’INTERPRETATION OU A
                        L’EXCUTION DE LA PRESTATION/DE LA COMMANDE, L’ENTREPRISE
                        ET LE CLIENT RECHERCHERONT, AVANT TOUTE ACTION CONTENTIEUSE,
                        UN ACCORD AMIABLE ET SE COMMUNIQUERONT A CET EFFET TOUS LES
                        ELEMENTS D’INFORMATION NECESSAIRES. A DEFAUT D’UN REGLEMENT
                        AMIABLE DU LITIGE DANS UN DELAI MAXIMUM DE 3 MOIS, SERONT
                        SEULS COMPETENTS EN CAS DE LITIGE DE TOUTE NATURE, LES
                        TRIBUNAUX DE BOULOGNE-SUR-MER.
                    </p>
                    <p>
                        CETTE CLAUSE S’APPLIQUE MEME EN CAS DE REFERE, DE DEMANDE
                        INCIDENTE OU DE PLURALITE DE DEFENDEURS OU D’APPEL EN
                        GARANTIE, ET QUELQUES SOIENT LE MODE ET LES MODALITES DE
                        PAIEMENT, SANS QUE LES CLAUSES ATTRIBUTIVES DE JURIDICTION
                        POUVANT EXISTER SUR LES DOCUMENTS DES CLIENTS PUISSENT
                        METTRE OBSTACLE A L’APPLICATION DE LA PRESENTE CLAUSE.
                    </p>
                </div>
            </div>

            <div className="gtc-section">
                <h2>
                    Article 19 – Politique de confidentialité (RGPD :
                    règlement général sur la protection des données)
                </h2>
                <div className="gtc-section-text">
                    <h3>1. Identification des données collectées</h3>
                    <p>
                        Afin d’assurer ses engagements contractuels vis-à-vis de ses
                        clients, l’entreprise CANINA LINGUA collecte les données
                        nécessaires à la mise en œuvre de ses prestations.
                    </p>
                    <p>
                        Ces données sont collectées lorsque le client :
                    </p>
                    <ul>
                        <li>
                            prend contact avec l’entreprise CANINA LINGUA pour toute
                            demande de renseignements ;
                        </li>
                        <li>
                            se voit adresser un devis ou une facture de la part de
                            l’entreprise CANINA LINGUA ;
                        </li>
                        <li>
                            effectue un devis ou une commande sur le site de
                            l’entreprise CANINA LINGUA.
                        </li>
                    </ul>
                    <p>
                        Dans ce cadre, l’entreprise CANINA LINGUA collecte les données
                        suivantes :
                    </p>
                    <ul>
                        <li>Civilité ;</li>
                        <li>Nom ;</li>
                        <li>Prénom ;</li>
                        <li>Adresse ;</li>
                        <li>Numéros de téléphone ;</li>
                        <li>Adresse de courrier électronique ;</li>
                        <li>
                            Code interne de traitement permettant l’identification
                            du client.
                        </li>
                    </ul>

                    <h3>2. Finalités et exploitation des données traitées</h3>
                    <p>
                        Les finalités des traitements de données effectués par
                        l’entreprise CANINA LINGUA sont les suivantes :
                    </p>
                    <ul>
                        <li>Établissement des devis et factures ;</li>
                        <li>Facturation des commandes payées par carte bancaire ;</li>
                        <li>Gestion des comptes clients ;</li>
                        <li>Suivi de la relation client ;</li>
                        <li>Statistiques de fréquentation du site ;</li>
                    </ul>
                    <p>
                        Ces traitements sont effectués à l’exclusion de toute
                        prospection commerciale, conformément au texte fourni
                        par l’entreprise.
                    </p>

                    <h3>3. Destination des données collectées</h3>
                    <p>
                        Les données collectées ne sont jamais transmises à l’extérieur
                        de l’entreprise CANINA LINGUA.
                    </p>

                    <h3>4. Durée de conservation des données</h3>
                    <p>
                        Les données sont conservées et utilisées pour une durée conforme
                        à la législation en vigueur, et notamment au référentiel de
                        la CNIL.
                    </p>

                    <h3>5. Droit d’accès et de rectification des données</h3>
                    <p>
                        Conformément au RGPD et à la loi n° 78-17 « Informatique et
                        Libertés » du 6 janvier 1978, chaque personne dispose d’un
                        droit d’accès, de rectification, de transfert et d’opposition
                        concernant ses données personnelles, dans les conditions
                        prévues par la réglementation applicable.
                    </p>
                    <p>
                        Ce droit peut être exercé en contactant l’entreprise par
                        courrier électronique à l’adresse :
                        {' '}
                        <a href="mailto:davidlevel@caninalingua.fr">
                            davidlevel@caninalingua.fr
                        </a>.
                    </p>
                    <p>
                        Pour plus d’informations sur le sujet, vous pouvez consulter
                        le site Internet de la CNIL :
                        {' '}
                        <a
                            href="https://www.cnil.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.cnil.fr
                        </a>.
                    </p>
                </div>
            </div>

            <div className="gtc-link">
                <p>Besoin de renseignements ?</p>
                <NavLink
                    to="/contact"
                    content="Contactez-nous !"
                    id=""
                />
            </div>
        </main>
    );
}

export default GTC;
