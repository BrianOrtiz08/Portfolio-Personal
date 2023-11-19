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
        icon: "open"
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
        icon: "open"
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
        icon: "open"
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
        icon: "open"
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
        icon: "open"
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
        icon: "open"
    }
]

const projectsGridId = document.getElementById("projectsGridId")

projectsSites.map((e) => {
    projectsGridId.innerHTML += `
        <div class="projectsCard">
            <p class="cardTitle">${e.name}</p>

            <img src="./img/${e.image}.jpg" alt="" class="cardImg">

            <div class="cardSkills">
                <p class="cardSkill">${e.skills.one}</p>
                <p class="cardSkill">${e.skills.two}</p>
                <p class="cardSkill">${e.skills.three}</p>
            </div>

            <p class="cardDetails">${e.details}</p>

            <div class="cardOpen">
                <img src="./img/${e.icon}.svg" alt="" class="cardOpenImg">
            </div>
        </div>
    `
})