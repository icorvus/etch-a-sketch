function createGrid(numberOfColumns) {
  const grid = document.getElementById('grid');
  grid.textContent = ''
  const gridWidth =  grid.clientWidth;

  const cellWidth = gridWidth/numberOfColumns;
  for (let i = 0; i < numberOfColumns ** 2; i++){
    const cell = document.createElement('div');
    cell.setAttribute('style', `box-sizing: border-box; width: ${cellWidth}px;
     height: ${cellWidth}px; border: 1px solid black`);
    cell.addEventListener('mouseenter', colorToBlack);
    grid.appendChild(cell);
  }
}

function clearGrid() {
  gridSize = prompt("How many squares per side do you want?");
  createGrid(gridSize);
}

const colorToBlack = (event) => {
  event.target.style.backgroundColor = 'black';
}

clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearGrid)



createGrid(32);