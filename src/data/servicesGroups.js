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
                    "Un premier rendez-vous pour découvrir les besoins fondamentaux du chiot, les principes d’apprentissage et les bases d’une relation sereine.",
                details: [
                    "Comprendre les besoins du chiot et ses signaux de communication.",
                    "Découvrir les principes d’apprentissage.",
                    "Aborder les premières difficultés et prévenir certaines problématiques.",
                    "Commencer à apprendre le langage du chien pour mieux le comprendre."
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
                    "Un temps d’échange et d’observation pour cerner vos attentes, identifier les problématiques rencontrées et commencer à comprendre le comportement de votre chien.",
                details: [
                    "Faire le point sur votre quotidien et votre relation.",
                    "Identifier les situations qui posent problème.",
                    "Découvrir les premiers conseils et les bases de la communication canine."
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
                    "Une séance à domicile ou dans un lieu défini ensemble pour travailler les apprentissages, améliorer le quotidien ou accompagner une difficulté comportementale.",
                details: [
                    "Travailler sur des objectifs définis avec vous.",
                    "Adapter les exercices à votre chien et à son environnement.",
                    "Prendre en compte ses émotions et ses signaux de communication."
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
                    "Un forfait pour poursuivre le travail engagé au fil de plusieurs séances et accompagner progressivement les évolutions de votre chien.",
                details: [
                    "Cinq séances d’accompagnement.",
                    "Des objectifs de travail qui évoluent au fil du suivi.",
                    "Une attention portée à la relation et aux progrès du binôme."
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
                duration: "Balade en extérieur",
                price: "20 €",
                image: baladeGroupeImage,
                imageHint: "Canina Lingua - Plusieurs chiens en balade dans la nature",
                tag: "Socialité canine",
                description:
                    "Une balade pour observer les interactions entre chiens et mieux comprendre leurs comportements et leur communication, dans un cadre adapté.",
                details: [
                    "Observer les interactions entre congénères.",
                    "Apprendre à mieux lire les signaux de communication.",
                    "Partager un moment de balade dans un environnement naturel."
                ],
                cta: "Participer à une balade sociale"
            },
            {
                id: "balade-pedagogique",
                name: "Balade pédagogique",
                duration: "Balade en extérieur",
                price: "20 €",
                image: baladePedagogiqueImage,
                imageHint: "Canina Lingua - Un chien qui explore un sentier avec son humain",
                tag: "Apprendre autrement",
                description:
                    "Une balade qui associe découverte de l’environnement, observation du chien et mise en pratique de certains apprentissages du quotidien.",
                details: [
                    "Travailler certains apprentissages en situation réelle.",
                    "Mieux comprendre les réactions et les besoins de votre chien.",
                    "Apprendre à observer la communication canine."
                ],
                cta: "Réserver une balade pédagogique"
            },
            {
                id: "mantrailing",
                name: "Stage d’initiation au mantrailing",
                duration: "Stage d’initiation",
                price: "30 €",
                image: initiationMantrailingImage,
                imageHint: "Canina Lingua - Séance de ManTrailing",
                tag: "Découverte olfactive",
                description:
                    "Une première découverte du mantrailing, une activité de pistage dans laquelle le chien apprend à suivre une piste olfactive.",
                details: [
                    "Découvrir une activité de pistage canin.",
                    "Mettre en valeur les capacités olfactives du chien.",
                    "Explorer une nouvelle façon de coopérer avec votre compagnon."
                ],
                cta: "Découvrir le mantrailing"
            }
        ]
    }
];

export default servicesGroups;