const buttons = document.getElementsByClassName( "btn" )
const playBtn = document.querySelector( ".play-btn" )
const msg = document.querySelector( ".msg" )
const restartBtn = document.querySelector( ".restart-btn" )

let startGame = false

// active player in the beginning
let activePlayer = Math.floor( Math.random() * 2 ) == 0 ? "X" : "O"


playBtn.onclick = () => {
  if ( !startGame ) {
    playBtn.className = "play-btn-disabled"
    startGame = true
  }
}

restartBtn.onclick = () => {
  if ( !startGame ) {
    playBtn.style.display = "block"
    restartBtn.style.display = "none"
    playBtn.className = "play-btn-disabled"
    startGame = true
    for ( let i = 0; i < buttons.length; i++ ) {
      buttons[i].innerHTML = ""
    }
    // again select a random player to open
    activePlayer = Math.floor( Math.random() * 2 ) == 0 ? "X" : "O"
  }
}




msg.innerHTML = `Its turn of '${activePlayer}'`

function changeTurn () {
  activePlayer = activePlayer == "X" ? "O" : "X"
  msg.innerHTML = `Its turn of '${activePlayer}'`
}


for ( let i = 0; i < buttons.length; i++ ) {
  buttons[i].onclick = () => {
    if ( startGame && buttons[i].innerHTML == "" ) {
      // console.log(`Clicked on button ${i}`);
      buttons[i].innerHTML = activePlayer
      CheckWinner()
      changeTurn()
    }
  }
}

function CheckWinner () {
  if ( buttons[0].innerHTML == activePlayer && buttons[1].innerHTML == activePlayer && buttons[2].innerHTML == activePlayer
    || buttons[3].innerHTML == activePlayer && buttons[4].innerHTML == activePlayer && buttons[5].innerHTML == activePlayer
    || buttons[6].innerHTML == activePlayer && buttons[7].innerHTML == activePlayer && buttons[8].innerHTML == activePlayer
    || buttons[0].innerHTML == activePlayer && buttons[3].innerHTML == activePlayer && buttons[6].innerHTML == activePlayer
    || buttons[1].innerHTML == activePlayer && buttons[4].innerHTML == activePlayer && buttons[7].innerHTML == activePlayer
    || buttons[2].innerHTML == activePlayer && buttons[5].innerHTML == activePlayer && buttons[8].innerHTML == activePlayer
    || buttons[0].innerHTML == activePlayer && buttons[4].innerHTML == activePlayer && buttons[8].innerHTML == activePlayer
    || buttons[2].innerHTML == activePlayer && buttons[4].innerHTML == activePlayer && buttons[6].innerHTML == activePlayer
  ) {
    // console.log(`${activePlayer} is winner`);
    startGame = false
    alert( `${activePlayer} is winner` )
    playBtn.style.display = "none"
    restartBtn.style.display = "block"
    return
  }

  if ( buttons[0].innerHTML != ""
    && buttons[1].innerHTML != ""
    && buttons[2].innerHTML != ""
    && buttons[3].innerHTML != ""
    && buttons[4].innerHTML != ""
    && buttons[5].innerHTML != ""
    && buttons[6].innerHTML != ""
    && buttons[7].innerHTML != ""
    && buttons[8].innerHTML != "" ) {
    playBtn.style.display = "none"
    restartBtn.style.display = "block"
    startGame = false
    alert( "Match drawn" )
  }
}
