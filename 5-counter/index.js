const counterText = document.querySelector(".counter")
const incBtn = document.querySelector(".inc")
const resetBtn = document.querySelector(".reset")

let counter = 0
incBtn.onclick = () => {
  counter++
  updateCounter(counter)
}
resetBtn.onclick = () => {
  counter = 0
  updateCounter(counter)
}

function updateCounter(value){
  counterText.innerHTML = value
}
