buttonEs.addEventListener("click", () => {
    localStorage.setItem("languageSpanish", "true")
    changeLanguage(0)
})

buttonEn.addEventListener("click", () => {
    localStorage.setItem("languageSpanish", "false")
    changeLanguage(1)
})

function changeLanguage(e) {
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

    aboutMeTitleId.innerText = lenguages[e].sectionAboutMe
    aboutMeSubtitleId.innerText = lenguages[e].paragraphTitle
    aboutMeTextId.innerText = lenguages[e].aboutMeText
    aboutMeTextSecondId.innerText = lenguages[e].aboutMeTextSecond
    aboutMeTextThirdId.innerText = lenguages[e].aboutMeTextThird
    aboutMeTextFourthId.innerText = lenguages[e].aboutMeTextFourth
    aboutMeTextFifthId.innerText = lenguages[e].aboutMeTextFifth

    aboutMeSubtitleSecondId.innerText = lenguages[e].aboutMeDetails
    aboutMeNameId.innerText = lenguages[e].aboutMeName
    aboutMeAgeId.innerText = lenguages[e].aboutMeAge
    aboutMeAgeTextId.innerText = lenguages[e].aboutMeNameText
    aboutMeLocationId.innerText = lenguages[e].aboutMeLocation
    contactTitleId.innerText = lenguages[e].sectionContact
    contactDetailsTitleId.innerText = lenguages[e].contactDetailsTitle
    contactDetailsParagraphOneId.innerText = lenguages[e].contactParagraphOne
    contactDetailsParagraphTwoId.innerText = lenguages[e].contactParagraphTwo
    footerTitleId.innerText = lenguages[e].contactFooter
    document.getElementById("formNameId").placeholder = lenguages[e].inputOne
    document.getElementById("formEmailId").placeholder = lenguages[e].inputTwo
    document.getElementById("formMessageId").placeholder = lenguages[e].inputThree
    formSubmitId.innerText = lenguages[e].submit

    footerCopyId.innerText = lenguages[e].copy
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
