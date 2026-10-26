import baladeGroupeImage from "../assets/img/img_prestations/Canina_Lingua_prestation_balade_groupe.webp";
import bilanChiotImage from "../assets/img/img_prestations/Canina_Lingua_prestation_bilan_chiot.webp";
import bilanComportementalImage from "../assets/img/img_prestations/Canina_Lingua_prestation_bilan_comportemental.webp";
import baladePedagogiqueImage from "../assets/img/img_prestations/Canina_Lingua_prestation_balade_pedagogique.webp";
import forfaitImage from "../assets/img/img_prestations/Canina_Lingua_prestation_forfait.webp";
import seanceIndividuelleImage from "../assets/img/img_prestations/Canina_Lingua_prestation_seance_individuelle_education.webp";
import initiationMantrailingImage from "../assets/img/img_prestations/Canina_Lingua_prestation_initiation_mantrailing.webp";

const servicesGroups = [
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
                image: bilanChiotImage,
                imageHint: "Canina Lingua - Un chiot qui découvre son environnement",
                tag: "Pour bien démarrer",
                description:
                    "Un premier rendez-vous pour découvrir les besoins fondamentaux de votre chiot, comprendre les principes d’apprentissage et aborder les premières problématiques. Ce bilan permet également de débuter un cursus « Chien première langue » afin d'apprendre à comprendre les signaux de communication du chien et de construire une relation sereine au quotidien.",
                details: [
                    "Comprendre les besoins fondamentaux du chiot et ses signaux de communication.",
                    "Découvrir les principes d’apprentissage pour mieux l'accompagner.",
                    "Aborder les premières difficultés et prévenir certaines problématiques.",
                    "Commencer à apprendre le langage du chien dans le cadre du cursus « Chien première langue »."
                ],
                cta: "Réserver mon bilan chiot"
            },
            {
                id: "bilan-comportemental",
                name: "Bilan comportemental",
                duration: "2 h 30",
                price: "80 €",
                image: bilanComportementalImage,
                imageHint: "Canina Lingua - Un chien accompagné par son humain",
                tag: "Comprendre les difficultés",
                description:
                    "Un temps d’échange et d’observation pour cerner vos attentes, faire le point sur votre quotidien et définir les problématiques rencontrées avec votre chien. Ce bilan permet également de commencer à comprendre son comportement et de vous apporter les premiers conseils adaptés à votre situation.",
                details: [
                    "Faire le point sur votre quotidien, vos attentes et votre relation avec votre chien.",
                    "Identifier les situations qui posent problème et les problématiques à travailler.",
                    "Découvrir les premiers conseils pour mieux accompagner votre chien.",
                    "Mieux comprendre ses signaux de communication et les difficultés rencontrées au quotidien."
                ],
                cta: "Réserver mon bilan comportemental"
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
                image: seanceIndividuelleImage,
                imageHint: "Canina Lingua - Un exercice d’éducation dans un environnement quotidien",
                tag: "Séance individuelle",
                description:
                    "Une séance individuelle à domicile ou dans un lieu défini à l'avance pour travailler les apprentissages de base, améliorer le quotidien ou accompagner une difficulté comportementale. Les exercices sont adaptés à votre chien, à son environnement et aux besoins de votre binôme.",
                details: [
                    "Travailler les apprentissages de base ou les objectifs définis ensemble.",
                    "Adapter les exercices aux situations rencontrées dans votre quotidien.",
                    "Accompagner certaines difficultés comportementales dans une démarche de rééducation.",
                    "Prendre en compte les émotions de votre chien et ses signaux de communication."
                ],
                cta: "Réserver une séance d'éducation"
            },
            {
                id: "forfait-5-seances",
                name: "Forfait 5 séances",
                duration: "5 séances",
                price: "220 €",
                image: forfaitImage,
                imageHint: "Canina Lingua - Un chien et son humain qui progressent ensemble",
                tag: "Un suivi dans la durée",
                description:
                    "Un forfait de cinq séances d'éducation ou de rééducation pour poursuivre le travail engagé avec votre chien. Ce suivi permet de progresser étape par étape, de consolider les apprentissages et d'adapter les objectifs aux évolutions de votre binôme.",
                details: [
                    "Bénéficier de cinq séances d'éducation ou de rééducation.",
                    "Travailler progressivement les apprentissages et les difficultés rencontrées.",
                    "Faire évoluer les objectifs au fil des séances et des progrès observés.",
                    "Construire une relation plus harmonieuse en tenant compte des besoins et des émotions de votre chien."
                ],
                cta: "Choisir le forfait 5 séances"
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
                duration: "1 Balade en extérieur",
                price: "20 €",
                image: baladeGroupeImage,
                imageHint: "Canina Lingua - Plusieurs chiens en balade dans la nature",
                tag: "Sociabilité canine",
                description:
                    "Une balade pendant laquelle votre compagnon peut travailler sa sociabilité au contact de ses congénères. C'est également l'occasion pour vous d'apprendre à mieux comprendre la communication canine et à observer les interactions entre chiens, dans un cadre adapté.",
                details: [
                    "Travailler la sociabilité de votre chien au contact de ses congénères.",
                    "Observer les interactions entre chiens et apprendre à mieux lire leurs signaux de communication.",
                    "Mieux comprendre les comportements canins et les réactions de votre compagnon.",
                    "Partager un moment de balade dans un environnement naturel."
                ],
                cta: "Participer à une balade sociale"
            },
            {
                id: "balade-pedagogique",
                name: "Balade pédagogique",
                duration: "1 Balade en extérieur",
                price: "20 €",
                image: baladePedagogiqueImage,
                imageHint: "Canina Lingua - Un chien qui explore un sentier avec son humain",
                tag: "Apprendre autrement",
                description:
                    "Une balade sur un site naturel de la Côte d'Opale pour travailler l'éducation de base avec votre compagnon en situation réelle. Cette sortie associe découverte de l'environnement, observation du chien et mise en pratique des apprentissages du quotidien.",
                details: [
                    "Travailler les bases de l'éducation canine au cours d'une balade.",
                    "Mettre en pratique certains apprentissages dans un environnement naturel.",
                    "Mieux comprendre les réactions, les besoins et les signaux de communication de votre chien.",
                    "Progresser ensemble sur les apprentissages utiles au quotidien."
                ],
                cta: "Réserver une balade pédagogique"
            },
            {
                id: "mantrailing",
                name: "Stage d’initiation au mantrailing",
                duration: "1 Stage d’initiation",
                price: "30 €",
                image: initiationMantrailingImage,
                imageHint: "Canina Lingua - Séance de ManTrailing",
                tag: "Découverte olfactive",
                description:
                    "Une découverte du mantrailing, une discipline de pistage dans laquelle le chien apprend à suivre une piste olfactive pour retrouver une personne. Cette activité peut être utile dans certains parcours de rééducation, mais elle permet aussi de découvrir une nouvelle discipline simplement pour le plaisir.",
                details: [
                    "Découvrir les principes du mantrailing et du pistage canin.",
                    "Mettre en valeur les capacités olfactives de votre chien.",
                    "Explorer une activité pouvant présenter un intérêt dans certains cas de rééducation.",
                    "Développer la coopération avec votre compagnon tout en partageant une activité ludique."
                ],
                cta: "Découvrir le mantrailing"
            }
        ]
    }
];

export default servicesGroups;