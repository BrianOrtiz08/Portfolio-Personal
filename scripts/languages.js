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

        "sectionProjects": "Proyectos"
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

function changeLanguage(e) {
    let projectsGridId = document.getElementById("projectsGridId")
    let idiomaStorage = ""
    let detailsLenguage = ""
    let textCodeLenguage = ""
    let textVisitLenguage = ""
    let idioma = ""

    projectsGridId.innerHTML = ""
    idiomaStorage = localStorage.getItem("languageSpanish") === "true" ? 1 : 0;

    if (idiomaStorage == 1) {
        idioma = "es"
    } else {
        idioma = "en"
    }

    projectsSites.forEach((e) => {
        detailsLenguage = e.details[idioma]
        textCodeLenguage = e.textCode[idioma]
        textVisitLenguage = e.textVisit[idioma]

        projectsGridId.innerHTML += `
        <div class="projectsCard">
            <div class="cardImg">
                <img src="img/projects/${e.image}.jpg" alt="Imagen previa del sitio ${e.name}" class="cardImage">
         </div>

            <div class="cardDetails">
                <a href="${e.link}" class="cardTitle" target="_blank">${e.name}</a>
                <p class="cardDescription" id="${e.id}">${detailsLenguage}</p>
    
                <div class="cardSkills">
                    <img src="img/projects/${e.skills.one}.svg" alt="" class="cardSkill">
                    <img src="img/projects/${e.skills.two}.svg" alt="" class="cardSkill">
                    <img src="img/projects/${e.skills.three}.svg" alt="" class="cardSkill">
                </div>

                <div class="cardButtons">
                    <a href="${e.linkGitHub}" class="cardButton" target="_blank">
                        <p class="cardCode">${textCodeLenguage}</p>
                        <img src="img/projects/${e.iconGitHub}.svg" alt="" class="imgCardCodeImg">
                    </a>
        
                    <a href="${e.link}" class="cardButton" target="_blank">
                        <p class="cardSite">${textVisitLenguage}</p>
                        <img src="img/projects/${e.icon}.svg" alt="Icono de "open in new tab"" class="imgCardSiteImg">
                    </a>
                </div>
            </div>
        </div>
    `
    })


    let projectsId = document.getElementById("projectsId")
    let aboutMeId = document.getElementById("aboutMeId")
    let contactId = document.getElementById("contactId")

    let nameId = document.getElementById("nameId")
    let rolId = document.getElementById("rolId")
    let paragraphId = document.getElementById("paragraphId")
    let paragraphIdSecond = document.getElementById("paragraphIdSecond")

    let cvId = document.getElementById("cvId")
    let contactMeId = document.getElementById("contactMeId")

    let projectsTitleId = document.getElementById("projectsTitleId")

    projectsId.innerText = lenguages[e].projects
    aboutMeId.innerText = lenguages[e].aboutMe
    contactId.innerText = lenguages[e].contact

    nameId.innerText = lenguages[e].name
    rolId.innerText = lenguages[e].rol
    paragraphId.innerText = lenguages[e].paragraph
    paragraphIdSecond.innerText = lenguages[e].paragraphSecond

    cvId.innerText = lenguages[e].cv
    contactMeId.innerText = lenguages[e].contact

    projectsTitleId.innerText = lenguages[e].sectionProjects
}

if (localStorage.getItem("languageSpanish")) {
    if (localStorage.getItem("languageSpanish") === "true") {
        changeLanguage(0)
    } else {
        changeLanguage(1)
    }
} else {
    localStorage.setItem("languageSpanish", "true")
    changeLanguage(0)
}
