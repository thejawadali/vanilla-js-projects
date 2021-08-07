const main = document.querySelector(".main")

for (let i = 0; i < 20; i++) {
  const ic = document.createElement("div");
  ic.classList.add("image-container");
  const image = document.createElement("img");
  image.setAttribute("src", `./images/${i + 1}.jpg`);
  image.classList.add("image-container");
  ic.appendChild(image)
  main.appendChild(ic)
}