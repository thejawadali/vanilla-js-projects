const numberFrom = document.querySelector("#no-from")
const currencyFrom = document.querySelector("#currency-from")
const btnSwap = document.querySelector("#swap-btn")
const numberTo = document.querySelector("#no-to")
const currencyTo = document.querySelector("#currency-to")
const result = document.querySelector(".result")

// result.innerHTML = "1 EUR = <span style='color:cadetblue;'>1.9558</span> BGN"


numberFrom.onchange = calculate;

currencyFrom.onchange = calculate;

numberTo.onchange = calculate;

currencyTo.onchange = calculate;

btnSwap.onclick = () => {
  const t = currencyFrom.value
  currencyFrom.value = currencyTo.value
  currencyTo.value = t
  calculate()
}


function calculate() {
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom.value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyTo.value]
      result.innerHTML = `${numberFrom.value} ${currencyFrom.value} = 
      <span style='color:cadetblue;'>${(+rate * +numberFrom.value).toFixed(2)}</span> ${currencyTo.value}`
    })
}

calculate()