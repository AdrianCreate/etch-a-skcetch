const GRIDSIDE = 600;
let squaresPerSide = 16;


const grid = document.querySelector(".grid");
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");

const blackButton = document.querySelector(".black-toggle");
const eraserButton = document.querySelector(".eraser-toggle");
const gridToggle = document.querySelector(".grid-toggle");
const clearButton = document.querySelector(".clear-button");




sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
grid.style.width = grid.style.height = `${GRIDSIDE}px`

function setBackgroundColorBlack() {
  this.style.backgroundColor = "black";
}

function setBackgroundColorWhite() {
  this.style.backgroundColor = "white";
}

function createGridCells(squaresPerSide) {
  const numberOfSquares = squaresPerSide * squaresPerSide;
  const cellSide = `${(GRIDSIDE / squaresPerSide) - 2}px`;
  for(let i = 0;i < numberOfSquares; i++) {
  const gridCell = document.createElement("div");

  gridCell.style.width =  gridCell.style.height = cellSide;
  gridCell.classList.add("cell");

  grid.appendChild(gridCell);
  gridCell.addEventListener("mouseover", setBackgroundColorBlack);
  }
}

function removeGridCells () {
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

slider.oninput = function () {
  let txt = `${this.value} x ${this.value} (Resolution)`
  sliderValue.textContent = txt;
  removeGridCells();
  createGridCells(this.value);
}


blackButton.addEventListener("click", function () {
  grid.querySelectorAll(".cell").forEach(cell => {
    cell.removeEventListener("mouseover", setBackgroundColorWhite);
    cell.addEventListener("mouseover", setBackgroundColorBlack);
  });
});

eraserButton.addEventListener("click", function () {
  grid.querySelectorAll(".cell").forEach(cell => {
    cell.removeEventListener("mouseover", setBackgroundColorBlack);
    cell.addEventListener("mouseover", setBackgroundColorWhite);
  });
});

clearButton.addEventListener("click", function() {
  grid.querySelectorAll(".cell").forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
});
createGridCells(16);
