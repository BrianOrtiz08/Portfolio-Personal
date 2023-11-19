const projectsSites = [
    {
        id: 1,
        name: "Sitio #1",
        image: "projectOne",
        skills: {
            one: "HTML",
            two: "CSS",
            three: "JS"
        },
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur expedita ratione accusamus vitae pariatur excepturi, nihil aspernatur qui dicta!",
        icon: "open",
        link: "https://www.google.com/"
    },
    {
        id: 2,
        name: "Sitio #2",
        image: "projectTwo",
        skills: {
            one: "HTML",
            two: "CSS",
            three: "JS"
        },
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur expedita ratione accusamus vitae pariatur excepturi, nihil aspernatur qui dicta!",
        icon: "open",
        link: "https://www.facebook.com/"
    },
    {
        id: 3,
        name: "Sitio #3",
        image: "projectThree",
        skills: {
            one: "HTML",
            two: "CSS",
            three: "JS"
        },
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur expedita ratione accusamus vitae pariatur excepturi, nihil aspernatur qui dicta!",
        icon: "open",
        link: "https://www.pinterest.com/"
    },
    {
        id: 4,
        name: "Sitio #4",
        image: "projectFour",
        skills: {
            one: "HTML",
            two: "CSS",
            three: "JS"
        },
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur expedita ratione accusamus vitae pariatur excepturi, nihil aspernatur qui dicta!",
        icon: "open",
        link: "https://www.twitter.com/"
    },
    {
        id: 5,
        name: "Sitio #5",
        image: "projectFive",
        skills: {
            one: "HTML",
            two: "CSS",
            three: "JS"
        },
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur expedita ratione accusamus vitae pariatur excepturi, nihil aspernatur qui dicta!",
        icon: "open",
        link: "https://www.linkedin.com/"
    },
    {
        id: 6,
        name: "Sitio #6",
        image: "projectSix",
        skills: {
            one: "HTML",
            two: "CSS",
            three: "JS"
        },
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur expedita ratione accusamus vitae pariatur excepturi, nihil aspernatur qui dicta!",
        icon: "open",
        link: "https://www.instagram.com/"
    }
]

const projectsGridId = document.getElementById("projectsGridId")

projectsSites.map((e) => {
    projectsGridId.innerHTML += `
        <div class="projectsCard">
            <a href="${e.link}" class="cardTitle" target="_blank">${e.name}</a>

            <img src="./img/${e.image}.jpg" alt="Imagen previa del sitio ${e.name}" class="cardImg">

            <div class="cardSkills">
                <p class="cardSkill">${e.skills.one}</p>
                <p class="cardSkill">${e.skills.two}</p>
                <p class="cardSkill">${e.skills.three}</p>
            </div>

            <p class="cardDetails">${e.details}</p>

            <div class="cardOpen">
                <a href="${e.link}" target="_blank">
                    <img src="./img/${e.icon}.svg" alt="Icono de "open in new tab"" class="cardOpenImg">
                </a>
            </div>
        </div>
    `
})