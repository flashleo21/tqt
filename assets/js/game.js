let theNum = 0;
let counter = 0;
let db;
let name;

function randomNum() {
  theNum = Math.floor(Math.random() * 100 + 1);
}

let input = document.getElementById("numInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("guessButton").click();
  }
});

function guessNum() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  let numIn = 0;
  numIn = document.getElementById("numInput").value;
  if (numIn > theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-down";
    document.body.style.backgroundColor = "red";
  } else if (numIn < theNum) {
    document.getElementById("theIcon").className = "fas fa-arrow-up";
    document.body.style.backgroundColor = "red";
  } else if (numIn == theNum) {
    document.getElementById("theIcon").className = "fas fa-check-circle";
    document.getElementById("theGuessing").style.display = "none";
    document.getElementById("correctNum").innerHTML = theNum;
    document.getElementById("congo").style.display = "block";
    document.body.style.backgroundColor = "limegreen";
  }
  document.getElementById("numInput").value = "";
}
