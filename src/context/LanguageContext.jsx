import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_formation: "Formation",
    nav_projects: "Projets",
    nav_contact: "Contact",

    // Home Page
    home_hello: "Bonjour, je suis",
    home_download_cv: "Télécharger CV",
    home_hire_me: "Me contacter",
    home_role: "Développeur Full-Stack",
    home_bio: "Développeur Full-Stack MERN et NestJS. Spécialisé dans la conception d'architectures backend robustes et scalables, j'allie performance technique et interfaces utilisateurs fluides pour créer des solutions digitales de haute précision.",

    // Titles & Descriptions
    title_experience: "Expérience Professionnelle",
    desc_experience: "Un aperçu de mon parcours professionnel et des rôles clés que j'ai occupés",
    title_formation: "Formations Académiques",
    desc_formation: "Mon parcours éducatif et mes diplômes académiques",
    title_skills: "Mes Compétences",
    desc_skills: "Les technologies et outils avec lesquels je travaille au quotidien",
    title_projects: "Mes Projets",
    desc_projects: "Une sélection d'applications et de plateformes de haute précision que j'ai conçues",
    title_contact: "Me Contacter",
    desc_contact: "Envoyez-moi un message pour discuter d'opportunités de collaboration",

    // Contact Form
    contact_info_title: "Informations de Contact",
    contact_title_form: "Envoyer un Message",
    contact_name: "Nom complet",
    contact_email: "Adresse Email",
    contact_subject: "Sujet",
    contact_message: "Votre message",
    contact_name_placeholder: "Votre nom complet",
    contact_email_placeholder: "votre.email@exemple.com",
    contact_subject_placeholder: "Sujet de votre message",
    contact_message_placeholder: "Parlez-moi de votre projet ou dites bonjour...",
    contact_send: "Envoyer le message",
    contact_sending: "Envoi en cours...",
    contact_success: "Message envoyé avec succès !",
    contact_error: "Une erreur est survenue lors de l'envoi du message.",
    contact_phone: "Téléphone",
    contact_location: "Localisation",

    // Dynamic Items (Experiences, Formations, Projects)
    // Experience 3 (Customer Obsession)
    exp_3_poste: "Développeur Nest/Next & React Native",
    exp_3_desc: "Conception et développement d'applications mobiles sous React Native & Expo et d'architectures backend / APIs REST sous NestJS et Next.js. Intégration des APIs, gestion d'état global, authentification sécurisée, notifications push et déploiement de builds mobiles.",
    exp_3_dateFin: "En cours",
    // Experience 2 (Tython)
    exp_2_poste: "Développeur Full Stack ExpressJs / ReactJs",
    exp_2_desc: "Développement d'une solution qui permet au domaine de partager les templates avec d'autres domaines dans app.tybotflow.com et ajout d'un système de monitoring.",
    exp_2_dateFin: "2026-07-01",
    // Experience 1 (Afristy)
    exp_1_poste: "Développeur Full Stack PHP Laravel (stage)",
    exp_1_desc: "Développement d'une application de mise en relation entre créateurs et clients, participation à la conception et au développement complet de l'application. Création du backend avec Laravel et MySQL, développement frontend réactif avec Nuxt 3, Tailwind CSS, HTML et CSS. Intégration de la base de données et gestion des interactions client-serveur. Collaboration active avec l'équipe pour assurer la cohérence technique et fonctionnelle du projet.",

    // Formation 1
    form_1_diplome: "Développement Web et Mobile",
    form_1_desc: "Formation intensive en développement web et mobile, couvrant les technologies front-end et back-end modernes.",
    // Formation 2
    form_2_diplome: "Baccalauréat Option Sciences Physiques",
    form_2_desc: "Baccalauréat scientifique option Sciences Physiques.",
    // Formation 3
    form_3_diplome: "Diplôme Ajustage montage de cellules d'aéronefs",
    form_3_desc: "Formation technique en ajustage et montage de cellules d'aéronefs.",

    // Project 1
    proj_1_title: "TrajetCamen - Application Full-Stack de Gestion de Flotte",
    proj_1_desc: "Application web de gestion de flotte avec dashboard administrateur, suivi des trajets, véhicules, chauffeurs, consommation, carburants et maintenance préventive.",
    // Project 2
    proj_2_title: "ResQ - Solution de Dispatching d'Ambulances",
    proj_2_desc: "Application web de gestion de flotte d'ambulances avec cartographie interactive en temps réel. Permet le suivi des véhicules d'urgence, la gestion des incidents et l'optimisation des interventions via un tableau de bord complet.",
    // Project 3
    proj_3_title: "CarFlow - Plateforme de gestion hospitalière",
    proj_3_desc: "Plateforme de gestion hospitalière full-stack avec authentification JWT, gestion des patients et interface React/TypeScript moderne.",
    // Project 4
    proj_4_title: "reservation",
    proj_4_desc: "Une organisation (centre de formation, entreprise, association ou espace de coworking) organise régulièrement des événements (formations, ateliers, conférences, réunions internes).",

    // Skill Categories
    cat_stack_front_end: "Stack Front-End",
    cat_developpement_mobile: "Développement Mobile",
    cat_d_veloppement_mobile: "Développement Mobile",
    cat_stack_back_end: "Stack Back-End",
    cat_ai_tools: "Outils IA & Assistants",
    cat_tests: "Tests & Validation",
    cat_cloud_et_infrastructure: "Cloud & Infrastructure",
    cat_bases_de_donnees: "Bases de Données",
    cat_gestion_des_projets: "Gestion de Projet (Agile)",
    cat_control_de_version: "Contrôle de Version",
    cat_monitoring: "Monitoring & Observabilité",
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_formation: "Education",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Home Page
    home_hello: "Hello, I am",
    home_download_cv: "Download CV",
    home_hire_me: "Contact Me",
    home_role: "Full-Stack Developer",
    home_bio: "Junior Full-Stack Developer specializing in the MERN stack and NestJS. Designing robust and scalable backend architectures, I combine technical performance with fluid user interfaces to create high-precision digital solutions.",

    // Titles & Descriptions
    title_experience: "Professional Experience",
    desc_experience: "A summary of my work history and key roles I've undertaken",
    title_formation: "Academic Formations",
    desc_formation: "My educational journey and academic diplomas",
    title_skills: "My Skills",
    desc_skills: "Technologies and tools I work with on a daily basis",
    title_projects: "My Projects",
    desc_projects: "A selection of high-precision applications and platforms I designed",
    title_contact: "Contact Me",
    desc_contact: "Send me a message to discuss collaboration opportunities",

    // Contact Form
    contact_info_title: "Contact Info",
    contact_title_form: "Send a Message",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_subject: "Subject",
    contact_message: "Your message",
    contact_name_placeholder: "Your full name",
    contact_email_placeholder: "your.email@example.com",
    contact_subject_placeholder: "Subject of your message",
    contact_message_placeholder: "Tell me about your project or just say hello...",
    contact_send: "Send Message",
    contact_sending: "Sending...",
    contact_success: "Message sent successfully!",
    contact_error: "An error occurred while sending the message.",
    contact_phone: "Phone",
    contact_location: "Location",

    // Dynamic Items (Experiences, Formations, Projects)
    // Experience 3 (Customer Obsession)
    exp_3_poste: "Nest/Next & React Native Developer",
    exp_3_desc: "Design and full-stack development of mobile applications with React Native & Expo, and backend REST APIs architecture with NestJS and Next.js. API integration, global state management, secure authentication, push notifications, and mobile build deployment.",
    exp_3_dateFin: "Current",
    // Experience 2 (Tython)
    exp_2_poste: "Full Stack ExpressJs / ReactJs Developer",
    exp_2_desc: "Development of a solution that allows domains to share templates with other domains in app.tybotflow.com, along with building a custom monitoring infrastructure.",
    exp_2_dateFin: "2026-07-01",
    // Experience 1 (Afristy)
    exp_1_poste: "Full Stack PHP Laravel Developer (Internship)",
    exp_1_desc: "Development of a matchmaking application between creators and clients, participating in the design and full-stack development of the application. Backend engineering with Laravel and MySQL, responsive frontend development with Nuxt 3, Tailwind CSS, HTML, and CSS. Database modeling and client-server communication handling. Active collaboration with teams to ensure structural coherence.",

    // Formation 1
    form_1_diplome: "Web and Mobile Development",
    form_1_desc: "Intensive training in web and mobile development, covering modern front-end and back-end technologies.",
    // Formation 2
    form_2_diplome: "High School Degree in Physical Sciences",
    form_2_desc: "Scientific High School degree specializing in Physical Sciences.",
    // Formation 3
    form_3_diplome: "Aircraft Cell Assembly and Fitting Degree",
    form_3_desc: "Technical training in aircraft cell fitting and assembly.",

    // Project 1
    proj_1_title: "TrajetCamen - Full-Stack Fleet Management Application",
    proj_1_desc: "Web application for fleet management with admin dashboard, trip tracking, vehicles, drivers, consumption, fuel, and preventive maintenance.",
    // Project 2
    proj_2_title: "ResQ - Ambulance Dispatching Solution",
    proj_2_desc: "Web application for ambulance fleet management with real-time interactive mapping. Enables emergency vehicle tracking, incident management, and intervention optimization via a comprehensive dashboard.",
    // Project 3
    proj_3_title: "CarFlow - Hospital Management Platform",
    proj_3_desc: "Full-stack hospital management platform with JWT authentication, patient management, and modern React/TypeScript interface.",
    // Project 4
    proj_4_title: "reservation",
    proj_4_desc: "An organization (training center, company, association, or coworking space) regularly organizes events (trainings, workshops, conferences, internal meetings).",

    // Skill Categories
    cat_stack_front_end: "Front-End Stack",
    cat_developpement_mobile: "Mobile Development",
    cat_d_veloppement_mobile: "Mobile Development",
    cat_stack_back_end: "Back-End Stack",
    cat_ai_tools: "AI Tools & Assistants",
    cat_tests: "Testing & Validation",
    cat_cloud_et_infrastructure: "Cloud & Infrastructure",
    cat_bases_de_donnees: "Databases",
    cat_gestion_des_projets: "Project Management",
    cat_control_de_version: "Version Control",
    cat_monitoring: "Monitoring & Observability",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolioLanguage') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('portfolioLanguage', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = (key) => {
    return translations[language][key] || translations['fr'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
