const projectsSites = [
    {
        id: 1,
        name: "Nombre del sitio",
        image: "projectOne",
        skills: {
            one: "html",
            two: "css",
            three: "js"
        },
        details: {
            es: "Descripción de sitio",
            en: "Website description"
        },
        iconGitHub: "github",
        icon: "open",
        link: "https://www.google.com/",
        linkGitHub: "https://www.google.com/",
        textCode: {
            es: "Código",
            en: "Code"
        },
        textVisit: {
            es: "Visitar",
            en: "Open"
        }
    },
    {
        id: 2,
        name: "Nombre del sitio",
        image: "projectTwo",
        skills: {
            one: "html",
            two: "css",
            three: "js"
        },
        details: {
            es: "Descripción de sitio",
            en: "Website description"
        },
        iconGitHub: "github",
        icon: "open",
        link: "https://www.facebook.com/",
        linkGitHub: "https://www.google.com/",
        textCode: {
            es: "Código",
            en: "Code"
        },
        textVisit: {
            es: "Visitar",
            en: "Open"
        }
    },
    {
        id: 3,
        name: "Nombre del sitio",
        image: "projectThree",
        skills: {
            one: "html",
            two: "css",
            three: "js"
        },
        details: {
            es: "Descripción de sitio",
            en: "Website description"
        },
        iconGitHub: "github",
        icon: "open",
        link: "https://www.pinterest.com/",
        linkGitHub: "https://www.google.com/",
        textCode: {
            es: "Código",
            en: "Code"
        },
        textVisit: {
            es: "Visitar",
            en: "Open"
        }
    },
    {
        id: 4,
        name: "Nombre del sitio",
        image: "projectFour",
        skills: {
            one: "html",
            two: "css",
            three: "js"
        },
        details: {
            es: "Descripción de sitio",
            en: "Website description"
        },
        iconGitHub: "github",
        icon: "open",
        link: "https://www.twitter.com/",
        linkGitHub: "https://www.google.com/",
        textCode: {
            es: "Código",
            en: "Code"
        },
        textVisit: {
            es: "Visitar",
            en: "Open"
        }
    },
    {
        id: 5,
        name: "Nombre del sitio",
        image: "projectFive",
        skills: {
            one: "html",
            two: "css",
            three: "js"
        },
        details: {
            es: "Descripción de sitio",
            en: "Website description"
        },
        iconGitHub: "github",
        icon: "open",
        link: "https://www.linkedin.com/",
        linkGitHub: "https://www.google.com/",
        textCode: {
            es: "Código",
            en: "Code"
        },
        textVisit: {
            es: "Visitar",
            en: "Open"
        }
    },
    {
        id: 6,
        name: "Nombre del sitio",
        image: "projectSix",
        skills: {
            one: "html",
            two: "css",
            three: "js"
        },
        details: {
            es: "Descripción de sitio",
            en: "Website description"
        },
        iconGitHub: "github",
        icon: "open",
        link: "https://www.instagram.com/",
        linkGitHub: "https://www.google.com/",
        textCode: {
            es: "Código",
            en: "Code"
        },
        textVisit: {
            es: "Visitar",
            en: "Open"
        }
    }
]

const lenguages = [
    {
        "projects": "Proyectos",
        "aboutMe": "Acerca de mi",
        "contact": "Contacto",

        "name": "¡Hola! Mi nombre es Brian Ortiz",
        "rol": "Desarrollador Web Front End & Diseñador UX",
        "paragraph": "En constante aprendizaje sobre el Desarrollo Web y el Diseño UX/UI.",
        "paragraphSecond": "Si buscas un persona comprometida y entusiasta, estoy listo para tu próximo proyecto.",

        "cv": "Ver Curriculum",
        "contact": "Contáctame",

        "sectionProjects": "Proyectos",

        "sectionAboutMe" : "Acerca de mi",
        "paragraphTitle" : "¡Hola!",
        "aboutMeText" : "Soy Brian y me encanta crear sitios web geniales y útiles. Tengo experiencia en hacer páginas web que no solo se ven increíbles, sino que también funcionan de maravilla. ",
        "aboutMeTextSecond" : "¿Qué es lo que más me gusta?",
        "aboutMeTextThird" : "Personalizar diseños, asegurarme de que todo se vea genial tanto en computadoras como en teléfonos móviles, y hacer que todo funcione de manera rápida y eficiente.",
        "aboutMeTextFourth" : "¿Cómo lo hago?",
        "aboutMeTextFifth" : "Bueno, tengo muy buenos conocimientos en HTML y CSS, lo que me permite convertir ideas en interfaces fáciles de usar y experiencias realmente geniales para quienes visitan el sitio.",

        "aboutMeDetails" : "Detalles",
        "aboutMeName" : "Nombre y apellido:",
        "aboutMeAge" : "Edad:",
        "aboutMeNameText" : "21 años",
        "aboutMeLocation" : "Ubicación:",

        "sectionContact" : "Contacto",
        "contactDetailsTitle" : "No seas tímido",
        "contactParagraphOne" : "Español",
        "contactParagraphTwo" : "Español",
        "contactFooter" : "Seguíme"
    },
    {
        "projects": "Projects",
        "aboutMe": "About me",
        "contact": "Contact",

        "name": "Hello! My name is Brian Ortiz",
        "rol": "Front End Web Developer & UX Designer",
        "paragraph": "Constantly learning about Web Development and UX/UI Design.",
        "paragraphSecond": "If you are looking for a committed and enthusiastic person, I am ready for your next project.",

        "cv": "See resume",
        "contact": "Contact me",

        "sectionProjects": "Projects",

        "sectionAboutMe" : "About Me",
        "paragraphTitle" : "¡Hello!",
        "aboutMeText" : "I'm Brian and I love creating cool, useful websites. I have experience in making web pages that not only look amazing, but also perform wonderfully.",
        "aboutMeTextSecond" : "What do I like the most?",
        "aboutMeTextThird" : "Customizing layouts, making sure everything looks great on both computers and mobile phones, and making everything work quickly and efficiently.",
        "aboutMeTextFourth" : "How do I do it?",
        "aboutMeTextFifth" : "Well, I have a very good knowledge of HTML and CSS, which allows me to turn ideas into easy-to-use interfaces and really great experiences for those who visit the site.",

        "aboutMeDetails" : "Details",
        "aboutMeName" : "Name and surname:",
        "aboutMeAge" : "Age:",
        "aboutMeNameText" : "21 years old",
        "aboutMeLocation" : "Location:",

        "sectionContact": "Contact",
        "contactDetailsTitle": "Inglés",
        "contactParagraphOne" : "Inglés",
        "contactParagraphTwo" : "Inglés",
        "contactFooter" : "Follow me"
    }
]