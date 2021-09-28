const timeEl = document.querySelector( "#time" )
const roundEl = document.querySelector( "#round" )
const scoreEl = document.querySelector( "#score" )
const colorRGB = document.querySelector( "#color-rgb" )
const container = document.querySelector( ".color-container" )
const circles = document.getElementsByClassName( "circle" )
const replayBtn = document.querySelector( ".reply-btn" )
const resultScreen = document.querySelector( ".result-screen" )
const resultScreenScore = document.querySelector( ".result" )
const totalTime = 10
const totalRounds = 10
let currentRound = 0
let score = 0
let remainingTime = totalTime
let timerStarted = false


AssignColors()

function startTimer () {
  if ( timerStarted ) {
    remainingTime -= 0.1
    timeEl.textContent = parseFloat( remainingTime ).toFixed( 1 )
  }
  if ( remainingTime < 0.1 ) {
    timerStarted = false
    AssignColors()
  }
}

setInterval( startTimer, 100 )



function AssignColors () {
  if ( currentRound < totalRounds ) {
    let pickedColor
    let colors = ListOfColors( circles.length )
    pickedColor = colors[RandomRange( 0, colors.length - 1 )]
    colorRGB.textContent = pickedColor
    container.style.background = pickedColor
    remainingTime = totalTime
    timerStarted = true
    currentRound++
    roundEl.textContent = `${currentRound} / ${totalRounds}`
    scoreEl.textContent = score

    // change colors of Circles randomly
    for ( let i = 0; i < circles.length; i++ ) {
      circles[i].style.background = colors[i]
      circles[i].onclick = () => {
        if ( timerStarted ) {
          timerStarted = false
          if ( pickedColor === circles[i].style.background ) {
            score += Math.ceil( totalTime - ( totalTime - remainingTime ) )
            scoreEl.textContent = score
            AssignColors()
          } else {
            showWrongIndicator()
          }
        }
      }
    }
  } else {
    // show game over panel
    resultScreen.style.display = "flex"
    resultScreenScore.textContent = score
  }
}

replayBtn.onclick = () => {
  resultScreen.style.display = "none"
  currentRound = 0
  score = 0
  remainingTime = totalTime
  timerStarted = false
  AssignColors()
}


function showWrongIndicator () {
  colorRGB.style.color = 'red'
  setTimeout( () => {
    AssignColors()
    colorRGB.style.color = '#eee'
  }, 1000 )
}



function ListOfColors ( no ) {
  var colors = []
  for ( let i = 0; i < no; i++ ) {
    colors.push( GenerateRandomColor() )
  }
  return colors
}


function GenerateRandomColor () {
  var r = RandomRange( 0, 255 )
  var g = RandomRange( 0, 255 )
  var b = RandomRange( 0, 255 )
  return "rgb(" + r + ", " + g + ", " + b + ")"

}

function RandomRange ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min
}
