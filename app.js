function createGrid(numberOfColumns) {
  const grid = document.getElementById('grid');

  // Clears the grid to make space for new divs
  grid.textContent = ''

  for (let i = 0; i < numberOfColumns; i++){
    const gridLine = document.createElement('div');
    gridLine.classList.add('grid-line');
    grid.appendChild(gridLine);
    for (let j = 0; j < numberOfColumns; j++){
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.style.backgroundColor = '#ffffff';
      cell.onmouseenter = gradientToBlack;
      gridLine.appendChild(cell);
    }
  }
}

function clearGrid() {
  const gridSize = prompt("How many squares per side do you want?\nCurrently max supported grid size is 100x100.");
  if (gridSize > 100 || isNaN(gridSize) || gridSize < 1) clearGrid();
  else createGrid(gridSize);
}

const colorToBlack = (event) => {
  event.target.style.backgroundColor = 'black';
}

const gradientToBlack = (event) => {
  const currentShade = parseInt(event.target.style.backgroundColor.slice(4, 7));
  console.log(currentShade);
  if (currentShade > 0) {
    let newShade = currentShade - 32;
    if (newShade < 0) {
      newShade = 0;
    }
    event.target.style.backgroundColor = `rgb(${newShade}, ${newShade}, ${newShade})`;
  }
}

const colorToRandom  = (event) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearGrid)



createGrid(32);