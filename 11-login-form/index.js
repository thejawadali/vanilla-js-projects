const errorMsg = document.querySelector( ".error-msg" )
const btn = document.querySelector( ".btn" )
const email = document.querySelector( "#email" )
const password = document.querySelector( "#password" )
const pv = document.querySelector( "#pv" )

pv.onclick = () => {
  if ( pv.innerHTML == "visibility_off" ) {
    pv.innerHTML = "visibility"
    password.setAttribute( "type", "password" )
  } else {
    pv.innerHTML = "visibility_off"
    password.setAttribute( "type", "text" )
  }
}

let e = '', p = '';


email.addEventListener( 'focusout', () => {
  if ( !email.value ) {
    ShowErrorMsg( "Eamil is required" )
    return
  }
  if ( !ValidateEmail( email.value ) ) {
    ShowErrorMsg( "You have entered an invalid email address!" )
    e = ''
    return
  }
  e = email.value
} )

password.addEventListener( 'focusout', () => {
  if ( !password.value ) {
    ShowErrorMsg( "password is required" )
    return
  }
  if ( password.value.length < 8 ) {
    ShowErrorMsg( "Enter password of at least 8 characters" )
    p = ''
    return
  }
  p = email.value
} )


btn.onclick = () => {
  if (e && p) {
    alert(`Welcome ${e.split("@")[0]}`)
  }else {
    alert("Can not proceed. Either email or password is invalid")
  }
}


function ShowErrorMsg ( msg ) {
  errorMsg.style.display = "inline"
  errorMsg.innerHTML = msg
  
  setTimeout(() => {
    errorMsg.style.display = "none"
    errorMsg.innerHTML = ''
  }, 2000);
}






function ValidateEmail ( mail ) {
  if ( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test( mail ) ) {
    return ( true )
  }
  return ( false )
}