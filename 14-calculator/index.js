const display = document.querySelector( ".input-display" )
const btn_ac = document.getElementById( "ac" )
const btn_plus_minus = document.getElementById( "plus-minus" )
const btn_percent = document.getElementById( "percent" )
const btn_divide = document.getElementById( "divide" )
const btn_multiply = document.getElementById( "multiply" )
const btn_minus = document.getElementById( "minus" )
const btn_plus = document.getElementById( "plus" )
const btn_dot = document.getElementById( "dot" )
const btn_equal = document.getElementById( "equal" )


let operator = null
let n1 = null, n2 = null
let result = null, displayValue = 0


SetDisplayValue( displayValue )

for ( let i = 0; i < 10; i++ ) {
  const btn = document.getElementById( `n${i}` )
  btn.onclick = () => {
    SetDisplayValue( displayValue == '0' ? i : displayValue + "" + i )
  }
}

btn_dot.onclick = () => {
  // you can not add more than one dot together
  // check if last char is not dot
  if ( displayValue.toString().slice( -1 ) != '.' ) {
    SetDisplayValue( displayValue + '.' )
  }

}

btn_ac.onclick = () => {
  // reset everything
  SetDisplayValue( 0 )
  n1 = null
  n2 = null
  operator = null
  result = null
}


function SetDisplayValue ( v ) {
  displayValue = v
  display.innerHTML = displayValue
}


function Operation ( op, equalOp = false ) {
  switch ( op ) {

    // addition
    case op = '+':
      // n1 is empty, means its first value  
      if ( n1 == null ) {
        n1 = displayValue
        displayValue = 0
      } else {
        if (!equalOp) return
        console.log("Calculating result");
        if ( n2 == null ) {
          n2 = displayValue
        }

        if ( n2 != null ) {
          // add n1 with value, show result
          result = +n1 + +n2
          n1 = result
          SetDisplayValue( result )
          result = null
        }
      }
      break

    // subtraction
    case op = '-':
      // n1 is empty, means its first value  
      if ( n1 == null ) {
        n1 = displayValue
        displayValue = 0
      } else {
        if (!equalOp) return
        if ( n2 == null ) {
          n2 = displayValue
        }

        if ( n2 != null ) {
          // add n1 with value, show result
          result = +n1 - +n2
          n1 = result
          SetDisplayValue( result )
          result = null
        }
      }
      break

    // multiply
    case op = '*':
      // n1 is empty, means its first value  
      if ( n1 == null ) {
        n1 = displayValue
        displayValue = 0
      } else {
        if (!equalOp) return
        if ( n2 == null ) {
          n2 = displayValue
        }

        if ( n2 != null ) {
          // add n1 with value, show result
          result = +n1 * +n2
          n1 = result
          SetDisplayValue( result )
          result = null
        }
      }
      break

    // division
    case op = '/':
      // n1 is empty, means its first value  
      if ( n1 == null ) {
        n1 = displayValue
        displayValue = 0
      } else {
        if (!equalOp) return
        if ( n2 == null ) {
          n2 = displayValue
        }

        if ( n2 != null ) {
          // add n1 with value, show result
          result = +n1 / +n2
          n1 = result
          SetDisplayValue( result )
          result = null
        }
      }
      break


    default:
      break
  }
}


// Operation Buttons
btn_equal.onclick = () => {
  Operation( operator, true )
}

btn_divide.onclick = () => {
  operator = "/"
  Operation( operator )

}
btn_multiply.onclick = () => {
  operator = "*"
  Operation( operator )
}
btn_plus.onclick = () => {
  operator = "+"
  Operation( operator )
}
btn_minus.onclick = () => {
  operator = "-"
  Operation( operator )
}

btn_plus_minus.onclick = () => {
  if ( displayValue != 0 )
    SetDisplayValue( -displayValue )
}
btn_percent.onclick = () => {
  if ( displayValue != 0 )
    SetDisplayValue( displayValue / 100 )
}