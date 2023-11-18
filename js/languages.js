const lenguages = [
    {
        "projects": "Proyectos",
        "aboutMe": "Acerca de mi",
        "contact": "Contacto"
    },
    {
        "projects": "Projects",
        "aboutMe": "About me",
        "contact": "Contact"
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

    projectsId.innerText = lenguages[e].projects
    aboutMeId.innerText = lenguages[e].aboutMe
    contactId.innerText = lenguages[e].contact
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