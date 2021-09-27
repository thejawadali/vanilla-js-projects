const searchBar = document.getElementsByClassName( "search" )[0]
var body = document.getElementsByTagName( "BODY" )[0]
const searchBtn = document.getElementsByClassName( "icon" )[0]
searchBtn.onclick = () => {
  searchBar.classList.toggle( "active" )
}

body.onclick = ( event ) => {
  if ( event.target.tagName === "BODY" && searchBar.classList.contains( "active" ) ) {
    searchBar.classList.remove( "active" )
  }
}

document.addEventListener( 'keydown', function ( event ) {
  if ( event.key === "Escape" && searchBar.classList.contains( "active" ) ) {
    searchBar.classList.remove( "active" )
  }
} )