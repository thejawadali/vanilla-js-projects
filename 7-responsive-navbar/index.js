const menuBtn = document.querySelector(".menu")
const btns  = document.querySelector(".btns")

menuBtn.onclick = ()=> {
  btns.classList.toggle("show-links");
}