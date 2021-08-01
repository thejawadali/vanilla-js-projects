const time = document.getElementsByClassName("time")[0]
const ampmEl = document.getElementsByClassName( "period" )[0]
const dateEl = document.getElementById("date")


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]





function SetDate() {
  const currentDate = new Date()
  const dateInNumber = currentDate.getDate() >= 10 ? currentDate.getDate() : "0" + currentDate.getDate()
  let hr = currentDate.getHours() == 0 ? 12 : currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours()
  hr = hr >= 10 ? hr : "0" + hr
  const mins = currentDate.getMinutes() >= 10 ? currentDate.getMinutes() : "0" + currentDate.getMinutes()
  const secs = currentDate.getSeconds() >= 10 ? currentDate.getSeconds() : "0" + currentDate.getSeconds()
  
  time.innerHTML= `${hr} : ${mins} : ${secs}`
  dateEl.innerHTML = daysOfWeek[currentDate.getDay() - 1] + ", " +  months[currentDate.getMonth()] + " " + dateInNumber + ", " + currentDate.getFullYear()
  ampmEl.innerHTML = currentDate.getHours() >= 12 ? "PM" : "AM"
}

SetDate()
setInterval(SetDate, 1000);