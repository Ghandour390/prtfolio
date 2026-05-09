// Static data for the portfolio - imported directly instead of fetching
// This allows the app to work without a backend server

export const userData = {
    userName: "abdelhak_ghandour",
    nom: "GHANDOUR",
    prenom: "Abdelhak",
    titre: "Développeur Full-Stack PHP | MERN-STACK JS",
    biographie: "Développeur Full Stack avec expertise en ReactJS, Node.js, Laravel et technologies cloud. Passionné par la création d'applications web performantes et innovantes.",
    adresse: "Agadir, Maroc",
    dateNaissance: "1995-01-01",
    telephone: "+212 6 24 53 05 46",
    email: "abdelhakghandour6@gmail.com",
    linkedin: "ghandourabdelhak",
    github: "Abdelhak Ghandour"
};

export const competences = [
    { id: 1, title: "Programmation front-end", name: "ReactJS", percent: 70 },
    { id: 2, title: "Programmation front-end", name: "Js(ES6+)", percent: 70 },
    { id: 3, title: "Programmation front-end", name: "TypeScript", percent: 60 },
    { id: 4, title: "Programmation front-end", name: "HTML/CSS", percent: 80 },
    { id: 5, title: "Programmation front-end", name: "TailwindCSS", percent: 75 },
    { id: 6, title: "Programmation front-end", name: "NextJS", percent: 70 },
    { id: 7, title: "Stack back-end", name: "NodeJS", percent: 65 },
    { id: 8, title: "Stack back-end", name: "ExpressJS", percent: 80 },
    { id: 9, title: "Stack back-end", name: "NestJS", percent: 80 },
    {id:10,title:"Stack back-end",name:"GOLANG",percent:30},
    { id: 11, title: "Stack back-end", name: "PHP", percent: 80 },
    { id: 12, title: "Stack back-end", name: "Laravel", percent: 90 },
    { id: 13, title: "Stack back-end", name: "GraphQL", percent: 60 },
    { id: 14, title: "Tests", name: "Jest", percent: 60 },
    { id: 15, title: "Tests", name: "Mocha/Chai", percent: 60 },
    { id: 16, title: "Cloud et Infrastructure", name: "Docker", percent: 65 },
    { id: 17, title: "Cloud et Infrastructure", name: "CI/CD", percent: 75 },
    { id: 18, title: "Cloud et Infrastructure", name: "Jenkins", percent: 50 },
    { id: 19, title: "Cloud et Infrastructure", name: "Kubernetes", percent: 20 },
    { id: 22, title: "Bases de données", name: "MongoDB", percent: 80 },
    { id: 23, title: "Bases de données", name: "MySQL", percent: 85 },
    { id: 24, title: "Bases de données", name: "PostgreSQL", percent: 85 },
    { id: 25, title: "Bases de données", name: "Redis", percent: 80 },
    { id: 25, title: "Gestion des projets", name: "Agile/Scrum", percent: 80 },
    { id: 25, title: "Control de version", name: "Git/GitHub/GitLab", percent: 80 },
    { id: 26, title: "Monitoring", name: "Prometheus", percent: 30 },
    { id: 27, title: "Monitoring", name: "Grafana", percent: 30 },
    { id: 28, title: "Monitoring", name: "loki", percent: 30 },
    { id: 29, title: "Monitoring", name: "promtail", percent: 30 },
];

export const projects = [
    {
        id: 1,
        titre: "TrajetCamen - Application Full-Stack de Gestion de Flotte",
        description: "Application web de gestion de flotte avec dashboard administrateur, suivi des trajets, véhicules, chauffeurs, consommation, carburants et maintenance préventive.",
        urlGit: "https://github.com/Ghandour390/trajet.git",
        urlDemo: "",
        image: "",
        technologies: ["React 18", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Docker", "MinIO"]
    },
    {
        id: 2,
        titre: "ResQ - Solution de Dispatching d'Ambulances",
        description: "Application web de gestion de flotte d'ambulances avec cartographie interactive en temps réel. Permet le suivi des véhicules d'urgence, la gestion des incidents et l'optimisation des interventions via un tableau de bord complet.",
        urlGit: "https://github.com/Ghandour390/resq.git",
        urlDemo: "",
        image: "",
        technologies: ["React 19", "TypeScript", "Redux Toolkit", "Tailwind CSS", "React-Leaflet"]
    },
    {
        id: 3,
        titre: "CarFlow - Plateforme de gestion hospitalière",
        description: "Plateforme de gestion hospitalière full-stack avec authentification JWT, gestion des patients et interface React/TypeScript moderne.",
        urlGit: "https://github.com/Ghandour390/carflow",
        urlDemo: "",
        image: "",
        technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Leaflet Maps", "JSON Server", "Express", "MongoDB", "Redis", "JWT", "Docker Compose"]
    },
    {
        id: 4,
        titre: "reservation",
        description: "Une organisation (centre de formation, entreprise, association ou espace de coworking) organise régulièrement des événements (formations, ateliers, conférences, réunions internes)",
        urlGit: "https://github.com/Ghandour390/r-servation.git",
        urlDemo: "",
        image: "",
        technologies: ["NestJS", "PostgreSQL", "JWT", "Docker", "MinIO","Grafana","Prometheus"]
    }
];

export const experience = [
    {
        id: 1,
        poste: "Développeur Full Stack PHP Laravel (stage)",
        entreprise: "Société Afristy",
        description: "Développement d'une application de mise en relation entre créateurs et clients, participation à la conception et au développement complet de l'application. Création du backend avec Laravel et MySQL, développement frontend réactif avec Nuxt 3, Tailwind CSS, HTML et CSS. Intégration de la base de données et gestion des interactions client-serveur. Collaboration active avec l'équipe pour assurer la cohérence technique et fonctionnelle du projet.",
        dateDebut: "2025-05-01",
        dateFin: "2025-07-31"
    },
    {
    id: 2,
    poste: "Développeur Full Stack ExpressJs / ReactJs",
    entreprise: "Tython, Casablanca",
    description: "Développement d'une solution que permet a la demaine partager les template avec autre demaine dans app.tybotflow.com et aussi ajoutie system de monitoring .",
    dateDebut: "2026-04-01",
    dateFin: "En cours"
}
];

export const formation = [
    {
        id: 1,
        diplome: "Développement web et mobile",
        ecole: "YouCode Youssoufia | UM6P",
        description: "Formation intensive en développement web et mobile, couvrant les technologies front-end et back-end modernes.",
        dateDebut: "2024-01-01",
        dateFin: "2025-12-31"
    },
    {
        id: 2,
        diplome: "Baccalauréat Option Sciences Physiques",
        ecole: "BAC LIBRE | Settat",
        description: "Baccalauréat scientifique option Sciences Physiques.",
        dateDebut: "2019-09-01",
        dateFin: "2020-07-01"
    },
    {
        id: 3,
        diplome: "Diplôme Ajustage montage de cellules d'aéronefs",
        ecole: "ISTA",
        description: "Formation technique en ajustage et montage de cellules d'aéronefs.",
        dateDebut: "2015-09-01",
        dateFin: "2017-07-01"
    }
];

export const socialMedia = [
    { id: 1, platform: "GitHub", url: "https://github.com/Abdelhak-Ghandour", icon: "github" },
    { id: 2, platform: "LinkedIn", url: "https://linkedin.com/in/ghandourabdelhak", icon: "linkedin" }
];
