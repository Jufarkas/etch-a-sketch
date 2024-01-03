
///************** SETUP TO USE ADJUSTABLE SLIDER THAT CHANGES GRID SIZE **************///


let slider = document.querySelector('.slider');
let output = document.querySelector('.gridSliderOutput');
let mainGrid = document.querySelector('.mainGrid');
let applyButton = document.querySelector('.applyGridSize');
let sliderSize = slider.value;
output.textContent = slider.value + " x " + slider.value;

slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
};


function createStartGrid() {
    for (let x = 0; x < (slider.value * slider.value); x++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('squares');
        mainGrid.appendChild(gridSquare);

        const squareSize = document.querySelectorAll('.squares');
        squareSize.forEach(squares => {
            squares.style.width = slider.value * 6 + "px";
            squares.style.height = slider.value * 6 + "px";
        });

    };
};


createStartGrid();


/*************** FUNCTION TO APPLY CSS CHANGES TO DIVS TO FIT GRID ***************/

function resizeGrid() {
    const squareSize = document.querySelectorAll('.squares');
                squareSize.forEach(squares => {
                    squares.style.width = 600 / slider.value + "px";
                    squares.style.height = 600 / slider.value + "px";
    });
}

/******************** EVENT LISTENER FOR SLIDER TO RESIZE GRID ********************/

slider.addEventListener('input', () => {
    let newValue = slider.value;
    if (newValue > sliderSize) {
        for (let x = mainGrid.childElementCount +1; x <= (newValue * newValue); x++){
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('squares');
            mainGrid.appendChild(gridSquare);
            resizeGrid()
        };
    } else if (newValue < sliderSize){
        for (let x = mainGrid.childElementCount -1; x >= (newValue * newValue); x--){
            let squares = document.querySelector('.squares');
            mainGrid.removeChild(squares);
            resizeGrid()
        };
    };
    sliderSize = newValue;
});



/******************* FUNCTION TO CREATE RESIZABLE GRID WITH SLIDER *******************/


// slider.addEventListener('input', () => {
//     let newValue = slider.value;
//     if (newValue > sliderSize) {
//         for (let x = mainGrid.childElementCount +1; x <= (newValue * newValue); x++){
//             let gridSquare = document.createElement('div');
//             gridSquare.classList.add('squares');
//             mainGrid.appendChild(gridSquare);

//             const squareSize = document.querySelectorAll('.squares');
//                 squareSize.forEach(squares => {
//                     squares.style.width = 600 / slider.value + "px";
//                     squares.style.height = 600 / slider.value + "px";
//                 });
//         };
//     } else if (newValue < sliderSize){
//         for (let x = mainGrid.childElementCount -1; x >= (newValue * newValue); x--){
//             let squares = document.querySelector('.squares');
//             mainGrid.removeChild(squares);


//             const squareSize = document.querySelectorAll('.squares');
//                 squareSize.forEach(squares => {
//                     squares.style.width = 600 / slider.value + "px";
//                     squares.style.height = 600 / slider.value+ "px";
//                 });
//        };
//     };
//     sliderSize = newValue;
// });

