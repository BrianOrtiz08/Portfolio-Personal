// Padding para evitar la superposición con el header
projectsId.addEventListener("click", () => {
    let sectionProjects = document.getElementById("sectionProjects")

    sectionProjects.classList.add("projectsClick")
})

// Menú hamburguesa
buttonBurgerId.addEventListener("click", () => {
    let headerNavId = document.getElementById("headerNavId")
    headerNavId.classList.toggle("headerNavShow")

    buttonBurgerId.classList.add("buttonBurgerRemove")
    buttonBurgerCloseId.classList.add("buttonBurgerCloseShow")
})

buttonBurgerCloseId.addEventListener("click", () => {
    headerNavId.classList.toggle("headerNavShow")

    buttonBurgerCloseId.classList.remove("buttonBurgerCloseShow")
    buttonBurgerId.classList.remove("buttonBurgerRemove")
    buttonBurgerId.classList.add("buttonBurger")
})

function showNav(parametro){
    parametro.addEventListener("click", () => {
        headerNavId.classList.toggle("headerNavShow")
        buttonBurgerCloseId.classList.remove("buttonBurgerCloseShow")
        buttonBurgerId.classList.remove("buttonBurgerRemove")
        buttonBurgerId.classList.add("buttonBurger")
    })
}

showNav(projectsId)
showNav(aboutMeId)
showNav(contactId)