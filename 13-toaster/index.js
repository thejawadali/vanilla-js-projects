const showBtn = document.querySelector(".btn")
const toasters = document.querySelector(".toasters")

showBtn.onclick = ShowToast



function ShowToast() {
  const toast = document.createElement("div")
  const t = GetRandomToast()
  toast.classList.add('toast')
  toast.classList.add(t.type)
  toast.innerHTML = t.text
  toasters.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 2000);
}

function GetRandomToast() {
  return toastObjects[Math.floor((Math.random() * toastObjects.length))]
}

const toastObjects = [
  {
    text: "An error ocurred :-(",
    type: "error"
  },
  {
    text: "You have enter wrong password :-)",
    type: "info"
  },
  {
    text: "You request is successful",
    type: "success"
  },
]