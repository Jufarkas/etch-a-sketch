let slider = document.querySelector('.slider');
let output = document.querySelector('.gridSliderOutput');
let sliderSize = slider.value;
output.textContent = slider.value + " x " + slider.value;

slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
};


slider.addEventListener('input', () => {
    let gridSquare = document.createElement('div');
        gridSquare.classList.add('squares');
    let mainGrid = document.querySelector('.mainGrid');
    let newValue = document.querySelector('.slider').value;
    let squares = document.querySelector('.squares');
    
    if (newValue > sliderSize) {
        mainGrid.appendChild(gridSquare);
    } else if (newValue < sliderSize) {
        mainGrid.removeChild(squares);
    };

    sliderSize = newValue;
});