const body = document.getElementsByTagName("body")[0]
const color = document.querySelector("#color")
const btn = document.querySelector("#btn")


GenerateRandomColor()

btn.onclick = () => GenerateRandomColor()

function GenerateRandomColor() {
  var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = randomColor
  color.innerHTML = randomColor;
  btn.style.backgroundColor = randomColor
  btn.style.color = invertColor(randomColor)
}




function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

console.log(invertColor('#333'));