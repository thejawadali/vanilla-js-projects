const navBar = document.querySelector("nav")

window.addEventListener("scroll", () => {
  navBar.classList.toggle("sticky", window.scrollY > 200)
})