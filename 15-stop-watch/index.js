const time = document.querySelector( ".time" )
const startBtn = document.querySelector( "#start" )
const stopBtn = document.querySelector( "#stop" )
const resetBtn = document.querySelector( "#reset" )

time.innerHTML = "00 : 00 : 00"



let  sec = 0, min = 0, h = 0
let startTimer = false

function IncTimer () {
  if ( startTimer ) {
    sec = parseInt( sec )
    min = parseInt( min )
    h = parseInt( h )
    sec += 1
    if ( sec >= 60 ) {
      min += 1
      sec = 0
    }
    if (min >= 60) {
      h += 1
      min = 0
    }
    sec = sec >= 10 ? sec : "0" + sec
    min = min >= 10 ? min : "0" + min
    h = h >= 10 ? h : "0" + h
    time.innerHTML = `${h} : ${min} : ${sec}`
  }
}

startBtn.onclick = () => {
  resetBtn.classList.add("disabled")
  resetBtn.setAttribute('disabled','disabled');
  startTimer = true
}
stopBtn.onclick = () => {
  resetBtn.classList.remove("disabled")
  resetBtn.removeAttribute('disabled');
  startTimer = false
}

resetBtn.onclick = () => {
  if ( !startTimer ) {
    h = 0
    sec = 0
    min = 0
    time.innerHTML = "00 : 00 : 00"
  }
}


setInterval( () => {
  IncTimer()
}, 1000 )