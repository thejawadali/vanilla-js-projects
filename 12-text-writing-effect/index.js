const result = document.querySelector("#result")
const text = "I L❤️ve Pakistan"

let i = 0
startTyping()
function startTyping() {
  result.innerHTML = text.slice(0, i)
  i++
  if (i > text.length) {
    i = 1
  }
  setTimeout(startTyping, 100)
}
