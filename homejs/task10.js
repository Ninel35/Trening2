function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divContainer = document.querySelector("#controls");

divContainer.addEventListener("click", handleDiv);
function handleDiv(evt) {
    console.log(evt);
}

let numberAmount = 0;
function createBoxes(amount) {
    
}
