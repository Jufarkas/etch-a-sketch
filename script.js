let slider = document.querySelector('.slider');
let output = document.querySelector('.gridSliderOutput');
let mainGrid = document.querySelector('.mainGrid');
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
        document.getElementById('mainGridSize').style.width = sliderSize * 6 + "px";  // IF YOU CHANGE THE .squares PIXEL SIZE IN THE CSS FILE DON'T FORGET TO CHANGE THE VALUE YOU MULTIPLY WITH newValue
    };
};

createStartGrid();


slider.addEventListener('input', () => {
    let newValue = slider.value;
    if (newValue > sliderSize) {
        for (let x = mainGrid.childElementCount +1;
            x <= (newValue * newValue); x++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('squares');
            mainGrid.appendChild(gridSquare);
        };
    } else if (newValue < sliderSize){
        for (let x = mainGrid.childElementCount -1; 
            x >= (newValue * newValue); x--) {
                let squares = document.querySelector('.squares');
                mainGrid.removeChild(squares);
            };
    };
    document.getElementById('mainGridSize').style.width = newValue * 6 + "px";
    sliderSize = newValue; // IF YOU CHANGE THE .squares PIXEL SIZE IN THE CSS FILE DON'T FORGET TO CHANGE THE VALUE YOU MULTIPLY WITH newValue
    console.log(mainGrid.childElementCount);
});





/*  

    Make 3 buttons that let you choose between 1px, 2px, 4px

    Each button selection should increase the squares pixel size by a multiple of the selection

    (currently set to 6px in CSS file, so 1px = 1*6, 2px = 2*6, 4px = 4*6) 
    
    thus making them larger (so fewer squares total) to give the appearance of a changing pen size

*/