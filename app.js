function createGrid(numberOfColumns, mode) {
  const grid = document.getElementById('grid');

  // Clears the grid to make space for new divs
  grid.textContent = '';

  for (let i = 0; i < numberOfColumns; i++){
    const gridLine = document.createElement('div');
    gridLine.classList.add('grid-line');
    grid.appendChild(gridLine);
    for (let j = 0; j < numberOfColumns; j++){
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.style.backgroundColor = '#ffffff';
      cell.onmouseenter = mode;
      gridLine.appendChild(cell);
    }
  }
}

function changeWritingMode(newMode) {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => cell.onmouseenter = newMode);
}

function fillBackground(color) {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => cell.style.backgroundColor = color);
}

const colorToBlack = (event) => {
  event.target.style.backgroundColor = 'black';
};

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
};

const colorToRandom  = (event) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};


function main() {
  let currentMode = colorToBlack;
  let currentGridSize = 16;
  createGrid(currentGridSize, currentMode);

  const sliderBox = document.getElementById('slider-box');
  const gridText = document.createElement('h3');
  gridText.textContent = `${currentGridSize}x${currentGridSize}`;
  sliderBox.insertBefore(gridText, sliderBox.firstChild);

  const sliderGridSize = document.getElementById('grid-size');
  sliderGridSize.addEventListener('input', (event) => {
    currentGridSize = event.target.value;
    gridText.textContent = `${currentGridSize}x${currentGridSize}`;
    createGrid(currentGridSize, currentMode);
  });


  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', () => fillBackground('white'));

  const monoButton = document.getElementById('mono-btn');
  monoButton.addEventListener('click', () => {
    if ((currentMode !== colorToBlack)){
      currentMode = colorToBlack;
      if(isPenDown) {
        changeWritingMode(currentMode);
      }
    }
  });

  const gradientButton = document.getElementById('gradient-btn');
  gradientButton.addEventListener('click', () => {
    if ((currentMode !== gradientToBlack)){
      currentMode = gradientToBlack;
      if(isPenDown) {
        changeWritingMode(currentMode);
      }
    }
  });

  const rainbowButton = document.getElementById('rainbow-btn');
  rainbowButton.addEventListener('click', () => {
    if ((currentMode !== colorToRandom)){
      currentMode = colorToRandom;
      if(isPenDown) {
        changeWritingMode(currentMode);
      }
    }
  });

  let isPenDown = true;
  const grid = document.getElementById('grid');
  grid.addEventListener('click', () => {
    if (isPenDown) {
      changeWritingMode(null);
      isPenDown = false;
    } else {
      changeWritingMode(currentMode);
      isPenDown = true;
    }
  });

}

main();
