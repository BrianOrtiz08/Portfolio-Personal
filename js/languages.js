const lenguages = [
    {
        "projects": "Proyectos",
        "aboutMe": "Acerca de mi",
        "contact": "Contacto",

        "name": "¡Hola! Mi nombre es Brian Ortiz",
        "rol": "Desarrollador Web Front End & Diseñador UX",
        "paragraph": "En constante aprendizaje sobre el Desarrollo Web. Con sólidos conocimientos en HTML, CSS y JavaScript, busco transformar ideas en interfaces intuitivas para brindar la mejor experiencia de usuario posible. Si buscas un Desarrollador Web comprometido y entusiasta, estoy listo para tu próximo proyecto.",

        "cv": "Ver Curriculum Vitae",
        "contact": "Contáctame",

        "sectionProjects": "Proyectos"
    },
    {
        "projects": "Projects",
        "aboutMe": "About me",
        "contact": "Contact",

        "name": "Hello! My name is Brian Ortiz",
        "rol": "Front End Web Developer & UX Designer",
        "paragraph": "Constantly learning about Web Development. With solid knowledge of HTML, CSS and JavaScript, I seek to transform ideas into intuitive interfaces to provide the best user experience possible. If you are looking for a committed and enthusiastic Web Developer, I am ready for your next project.",

        "cv": "See resume",
        "contact": "Contact me",

        "sectionProjects": "Projects"
    }
]

let buttonEs = document.getElementById("headerButtonEsId")
let buttonEn = document.getElementById("headerButtonEnId")

buttonEs.addEventListener("click", () => {
    localStorage.setItem("languageSpanish", "true")
    changeLanguage(0)
})

buttonEn.addEventListener("click", () => {
    localStorage.setItem("languageSpanish", "false")
    changeLanguage(1)
})

function changeLanguage(e){
    let projectsId = document.getElementById("projectsId")
    let aboutMeId = document.getElementById("aboutMeId")
    let contactId = document.getElementById("contactId")

    let nameId = document.getElementById("nameId")
    let rolId = document.getElementById("rolId")
    let paragraphId = document.getElementById("paragraphId")

    let cvId = document.getElementById("cvId")
    let contactMeId = document.getElementById("contactMeId")

    let projectsTitleId = document.getElementById("projectsTitleId")

    projectsId.innerText = lenguages[e].projects
    aboutMeId.innerText = lenguages[e].aboutMe
    contactId.innerText = lenguages[e].contact

    nameId.innerText = lenguages[e].name
    rolId.innerText = lenguages[e].rol
    paragraphId.innerText = lenguages[e].paragraph

    cvId.innerText = lenguages[e].cv
    contactMeId.innerText = lenguages[e].contact

    projectsTitleId.innerText = lenguages[e].sectionProjects
}

if(localStorage.getItem("languageSpanish")){
    if(localStorage.getItem("languageSpanish") === "true"){
        changeLanguage(0)
    }else{
        changeLanguage(1)
    }
}else{
    localStorage.setItem("languageSpanish", "true")
    changeLanguage(0)
}