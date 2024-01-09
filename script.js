const mainGrid = document.querySelector('.mainGrid');
let allSquares = document.querySelectorAll('.square');
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
        squares.style.removeProperty('opacity');
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
    squareSize.forEach(squares => {
        if (confetti.checked == true){
            return;
        } else if (gradient.checked == true){
            return;
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
    squareSize.forEach(squares => {
        squares.style.width = 600 / slider.value + "px";
        squares.style.height = 600 / slider.value + "px";
        squares.style.backgroundColor = "transparent";
        if (removeGridLines.textContent == "Add Grid"){ 
            squares.style.borderColor = "transparent";
        };
    });
    if (confetti.checked == true) {
        confettiActive();
    } else if (gradient.checked == true) {
        gradientActive();
    } else {
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
};


// add event listener to squares

function squareListener() {
    if (confetti.checked == true) {
        return;
    } else if (gradient.checked == true) {
        return;
    } else {
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
};


// function to watch for confetti && gradient modes

// below function to stop confetti and gradient toggles from both being active
// 'onchange' assigned to each checkbox

function modeCheck(input) {
    const mode = document.querySelectorAll('input[type=checkbox]');
    for (var x = 0, c; c = mode[x]; x++) {
     c.disabled = !(!input.checked || c === input);
    }
};


function confettiActive() {
    const squareSize = document.querySelectorAll('.square');
    if (confetti.checked == true){
        squareSize.forEach(squares => {
            squares.addEventListener('mousemove', e =>{
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                if (e.buttons === 1){
                    squares.style.backgroundColor = "#" + randomColor;
                } else if (e.buttons === 2){
                    squares.style.backgroundColor = "transparent";
                };
            });
        });
    } else {
        squareListener()
    };
};


confetti.addEventListener('click', () => {
    confettiActive();
});



// will come back to try to figure out

// function gradientActive() {
//     const squareSize = document.querySelectorAll('.square');
//     let rgb = "red";
//     if (gradient.checked == true){
//         squareSize.forEach(squares => {
//                 squares.addEventListener('mousemove', e =>{
//                     if (e.buttons === 1){
//                         squares.style.backgroundColor = rgb;
//                     } else if (e.buttons === 2){
//                         squares.style.backgroundColor = "transparent";
//                     };
//                 });
//             });
//     } else {
//         squareListener()
//     };
// };


// gradient.addEventListener('click', () => {
//     gradientActive();
// });


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