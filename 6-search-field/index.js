const searchBar = document.getElementsByClassName("search")[0]
var body = document.getElementsByTagName("BODY")[0];
const searchBtn = document.getElementsByClassName("icon")[0]
searchBtn.onclick = ()=>{
  searchBar.classList.toggle("active")
}

body.onclick = ()=>{
  console.log("bod");
}