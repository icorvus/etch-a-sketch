function createGrid(numberOfColumns) {
  const grid = document.getElementById('grid');
  const gridWidth =  grid.clientWidth;

  const cellWidth = gridWidth/numberOfColumns;
  for (let i = 0; i < numberOfColumns ** 2; i++){
    const cell = document.createElement('div');
    cell.setAttribute('style', `box-sizing: border-box; width: ${cellWidth}px; height: ${cellWidth}px; border: 1px solid black`);
    grid.appendChild(cell);
  }
}

createGrid(16);