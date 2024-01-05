const mainGrid = document.querySelector('.mainGrid');
let allSquares = document.querySelectorAll('.squares');

const clearGrid = document.querySelector('.clearButton');
const removeGridLines = document.querySelector('.removeGridLines');

//***************************** SLIDER ***********************//

let slider = document.querySelector('.slider');

let sliderOutput = document.querySelector('.gridSliderOutput');
sliderOutput.textContent = slider.value + " x " + slider.value;

let sliderSize = slider.value;

slider.oninput = function() {
    sliderOutput.textContent = this.value + " x " + this.value;
};


//************* 'Clear' AND 'Remove Grid' BUTTONS *************//

clearGrid.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
        squares.forEach(squares => {
        squares.style.removeProperty('background-color');
        });
});

// remove grid button below

removeGridLines.addEventListener('click', () => {
    if (removeGridLines.textContent == "Remove Grid"){
        const squares = document.querySelectorAll('div');
        squares.forEach(squares => {
            squares.style.borderColor = "transparent";
        });
    } else {
        const squares = document.querySelectorAll('div');
        squares.forEach(squares => {
        squares.style.borderColor = "rgb(146, 146, 146)";
        });
    };

    if (removeGridLines.textContent == "Remove Grid") {
        removeGridLines.textContent = "Add Grid";
    } else {
        removeGridLines.textContent = "Remove Grid";
    };
});


//***************** FUNCTION TO RESIZE SQUARES ******************//

function resizeGrid() {
    const squareSize = document.querySelectorAll('.square');
    squareSize.forEach(squares => {
        squares.style.width = 600 / slider.value + "px";
        squares.style.height = 600 / slider.value + "px";
        squares.style.backgroundColor = "transparent";
    });
    squareListener();
};


// add event listener to squares

function squareListener() {
    const squareSize = document.querySelectorAll('.square');
    squareSize.forEach(squares => {
        squares.addEventListener('mousemove', e =>{
            if (e.buttons === 1){
                squares.style.backgroundColor = "black";
            } else if (e.buttons === 2){
                squares.style.backgroundColor = "transparent";
            };
        });
    });
};


//*********************** CREATE START GRID *********************//

function createStartGrid() {
    for (let x = 0; x < (slider.value * slider.value); x++) {
        let startSquare = document.createElement('div');
        startSquare.classList.add('square');
        mainGrid.appendChild(startSquare);
    };
    squareListener()
};

createStartGrid();

//****** ADD / REMOVE GRID SQUARES BASED ON SLIDER VALUE ******//


slider.addEventListener('input', () => {
    let newValue = slider.value;
    if (newValue > sliderSize) {
        for (let x = mainGrid.childElementCount; x < (newValue * newValue); x++){
            let newSquare = document.createElement('div');
            newSquare.classList.add('square');
            mainGrid.appendChild(newSquare);
        };
    } else if (newValue < sliderSize){
        for (let x = mainGrid.childElementCount; x > (newValue * newValue); x--){
            let oldSquare = document.querySelector('.square');
            mainGrid.removeChild(oldSquare);
        };
    };
    sliderSize = newValue;
    resizeGrid();
});