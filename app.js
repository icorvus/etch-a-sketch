function createGrid(numberOfColumns) {
  const grid = document.getElementById('grid');
  grid.textContent = ''
  const gridWidth =  grid.clientWidth;

  const cellWidth = gridWidth/numberOfColumns;
  for (let i = 0; i < numberOfColumns; i++){
    const gridLine = document.createElement('div');
    gridLine.classList.add('grid-line');
    grid.appendChild(gridLine);
    for (let j = 0; j < numberOfColumns; j++){
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.addEventListener('mouseenter', colorToBlack);
      gridLine.appendChild(cell);
    }
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