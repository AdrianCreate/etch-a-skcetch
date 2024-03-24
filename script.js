const GRIDSIDE = 600;
let rows= 16;
let cols= 16;

const grid = document.querySelector(".grid");
grid.style.width = `${GRIDSIDE}px`
grid.style.height = `${GRIDSIDE}px`

function changeBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridCells() {
  for(let i = 0;i < (rows * cols); i++) {
  const gridCell = document.createElement("div");

  gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
  gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;
  gridCell.classList.add("cell");

  grid.appendChild(gridCell);
  gridCell.addEventListener("mouseover", changeBackgroundColor);
  }
}

createGridCells();
