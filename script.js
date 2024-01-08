const mainGrid = document.querySelector('.mainGrid');
let allSquares = document.querySelectorAll('.squares');
const confetti = document.getElementById('confettiCheck');
const gradient = document.getElementById('gradientCheck');

const clearGrid = document.querySelector('.clearButton');
const removeGridLines = document.querySelector('.removeGridLines');
const colourBtn = document.querySelector('.changeColour');


//***************************** SLIDER ***********************//

let slider = document.querySelector('.slider');

let sliderOutput = document.querySelector('.gridSliderOutput');
sliderOutput.textContent = slider.value + " x " + slider.value;

let sliderSize = slider.value;

slider.oninput = function() {
    sliderOutput.textContent = this.value + " x " + this.value;
};


//***************** CLEAR/GRID/COLOUR BUTTONS *****************//

// clear button

clearGrid.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
        squares.forEach(squares => {
        squares.style.removeProperty('background-color');
        });
});

// remove grid button

removeGridLines.addEventListener('click', () => {
    if (removeGridLines.textContent == "Remove Grid"){
        const squares = document.querySelectorAll('.square');
        squares.forEach(squares => {
            squares.style.borderColor = "transparent";
        });
    } else {
        const squares = document.querySelectorAll('.square');
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

// colour button (watches for confetti mode toggle as well)

colourBtn.addEventListener('click', () => {
    const squareSize = document.querySelectorAll('.square'); 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    squareSize.forEach(squares => {
        if (confetti.checked == true){
            squares.addEventListener('mousemove', e =>{
                if (e.buttons === 1){
                    squares.style.backgroundColor = "#" + randomColor;
                } else if (e.buttons === 2){
                    squares.style.backgroundColor = "transparent";
                };
            });
        } else {
            squares.addEventListener('mousemove', e =>{
                if (e.buttons === 1){
                    squares.style.backgroundColor = colourBtn.value;
                } else if (e.buttons === 2){
                    squares.style.backgroundColor = "transparent";
                };
            });
        };
    });
});


//***************** FUNCTION TO RESIZE SQUARES ******************//

function resizeGrid() {
    const squareSize = document.querySelectorAll('.square');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    squareSize.forEach(squares => {
        squares.style.width = 600 / slider.value + "px";
        squares.style.height = 600 / slider.value + "px";
        squares.style.backgroundColor = "transparent";
        if (removeGridLines.textContent == "Add Grid"){ 
            squares.style.borderColor = "transparent";
        };
    });
    squareListener();
    if (confetti.checked == true){
        squareSize.forEach(squares => {
            squares.addEventListener('mousemove', e =>{
                if (e.buttons === 1){
                    squares.style.backgroundColor = "#" + randomColor;
                } else if (e.buttons === 2){
                    squares.style.backgroundColor = "transparent";
                };
            });
        });
    }
};


// add event listener to squares

function squareListener() {
    const squareSize = document.querySelectorAll('.square');
    squareSize.forEach(squares => {
        squares.addEventListener('mousemove', e =>{
            if (e.buttons === 1){
                squares.style.backgroundColor = colourBtn.value;
            } else if (e.buttons === 2){
                squares.style.backgroundColor = "transparent";
            };
        });
    });
};


// function to watch for confetti && gradient modes

confetti.addEventListener('click', () => {
    const squareSize = document.querySelectorAll('.square');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (confetti.checked == true){
        squareSize.forEach(squares => {
            squares.addEventListener('mousemove', e =>{
                if (e.buttons === 1){
                    squares.style.backgroundColor = "#" + randomColor;
                } else if (e.buttons === 2){
                    squares.style.backgroundColor = "transparent";
                };
            });
        });
    } else {
        squareListener()
    }
});


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