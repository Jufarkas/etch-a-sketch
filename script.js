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
    sliderSize = newValue;
    console.log(mainGrid.childElementCount);
});

