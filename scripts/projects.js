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
        details: "Descripción de sitio",
        iconGitHub: "github",
        icon: "open",
        link: "https://www.google.com/",
        linkGitHub: "https://www.google.com/"
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
        details: "Descripción de sitio",
        iconGitHub: "github",
        icon: "open",
        link: "https://www.facebook.com/",
        linkGitHub: "https://www.google.com/"
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
        details: "Descripción de sitio",
        iconGitHub: "github",
        icon: "open",
        link: "https://www.pinterest.com/",
        linkGitHub: "https://www.google.com/"
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
        details: "Descripción de sitio",
        iconGitHub: "github",
        icon: "open",
        link: "https://www.twitter.com/",
        linkGitHub: "https://www.google.com/"
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
        details: "Descripción de sitio",
        iconGitHub: "github",
        icon: "open",
        link: "https://www.linkedin.com/",
        linkGitHub: "https://www.google.com/"
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
        details: "Descripción de sitio",
        iconGitHub: "github",
        icon: "open",
        link: "https://www.instagram.com/",
        linkGitHub: "https://www.google.com/"
    }
]

const projectsGridId = document.getElementById("projectsGridId")

projectsSites.map((e) => {

    projectsGridId.innerHTML += `
        <div class="projectsCard">
            <div class="cardImg">
                <img src="../img/projects/${e.image}.jpg" alt="Imagen previa del sitio ${e.name}" class="cardImage">
            </div>

            <div class="cardDetails">
                <a href="${e.link}" class="cardTitle" target="_blank">${e.name}</a>
                <p class="cardDescription" id="${e.id}">${e.details}</p>
        
                <div class="cardSkills">
                    <img src="../img/projects/${e.skills.one}.svg" alt="" class="cardSkill">
                    <img src="../img/projects/${e.skills.two}.svg" alt="" class="cardSkill">
                    <img src="../img/projects/${e.skills.three}.svg" alt="" class="cardSkill">
                </div>

                <div class="cardButtons">
                    <a href="${e.linkGitHub}" class="cardButton" target="_blank">
                        <p class="cardCode">Code</p>
                        <img src="../img/projects/${e.iconGitHub}.svg" alt="" class="imgCardCodeImg">
                    </a>
            
                    <a href="${e.link}" class="cardButton" target="_blank">
                        <p class="cardSite">Live</p>
                        <img src="../img/projects/${e.icon}.svg" alt="Icono de "open in new tab"" class="imgCardSiteImg">
                    </a>
                </div>
            </div>
        </div>
    `
})