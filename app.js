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
  let [red, green, blue] = event.target.style.backgroundColor.slice(4, -1).split(', ');
  if (!(red === green && green === blue)) red = 255;
  const currentShade = red;
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

const colorPicker = document.getElementById('color-picker');
const colorContainer = document.getElementById('color-container');
colorPicker.addEventListener('input', () => colorContainer.style.backgroundColor = colorPicker.value);

const colorToUser = (event) => {
  event.target.style.backgroundColor = colorPicker.value;
};


function main() {
  let currentMode = colorToBlack;
  let currentGridSize = 16;
  let isPenDown = false;
  createGrid(currentGridSize, null);

  const sliderBox = document.getElementById('slider-box');
  const gridText = document.createElement('h3');
  gridText.textContent = `${currentGridSize}x${currentGridSize}`;
  sliderBox.insertBefore(gridText, sliderBox.firstChild);

  const sliderGridSize = document.getElementById('grid-size');
  sliderGridSize.addEventListener('input', (event) => {
    currentGridSize = event.target.value;
    gridText.textContent = `${currentGridSize}x${currentGridSize}`;
    createGrid(currentGridSize, null);
    isPenDown = false;
  });

  function penUp() {
    changeWritingMode(null);
    isPenDown = false;
  }

  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', () => {
    fillBackground('#ffffff');
    penUp();
  });

  const monoButton = document.getElementById('mono-btn');
  monoButton.addEventListener('click', () => {
    currentMode = colorToBlack;
    penUp();
  });

  const gradientButton = document.getElementById('gradient-btn');
  gradientButton.addEventListener('click', () => {
    currentMode = gradientToBlack;
    penUp();
  });

  const rainbowButton = document.getElementById('rainbow-btn');
  rainbowButton.addEventListener('click', () => {
    currentMode = colorToRandom;
    penUp();
  });

  const colorPicker = document.getElementById('color-picker');

  const fillButton = document.getElementById('fill-btn');
  fillButton.addEventListener('click', () => {
    fillBackground(colorPicker.value);
    penUp();
  });

  colorPicker.addEventListener('change', () => {
    currentMode = colorToUser;
    penUp();
  });

  const grid = document.getElementById('grid');
  grid.addEventListener('click', () => {
    if (isPenDown) {
      penUp();
    } else {
      changeWritingMode(currentMode);
      isPenDown = true;
    }
  });

}

main();
