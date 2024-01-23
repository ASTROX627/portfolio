const navLink = document.querySelectorAll(".nav-menu-link");

navLink.forEach(item => {
  item.addEventListener("click", (event) => {
    navLink.forEach(link => {
      link.classList.remove("active")
    })
    item.classList.add("active")
  })
})