const toggleBtns = document.getElementsByClassName( "btn" )

for ( let i = 0; i < toggleBtns.length; i++ ) {
  toggleBtns[i].onclick = ( e ) => {
    const text = e.currentTarget.parentElement.parentElement.children[1]
    if ( toggleBtns[i].children[0].innerHTML == "add" ) {
      toggleBtns[i].children[0].innerHTML = "remove"
      // show answer
      text.classList.add( "show" )
      text.classList.remove( "hide" )
    } else {
      toggleBtns[i].children[0].innerHTML = "add"
      // hide answer
      text.classList.add( "hide" )
      text.classList.remove( "show" )
    }
  }

}