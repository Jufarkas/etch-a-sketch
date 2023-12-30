let slider = document.querySelector('.slider');
let output = document.querySelector('.gridSliderOutput');
let sliderSize = slider.value;
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
    output.innerHTML = this.value + " x " + this.value;
};


let mainGrid = document.querySelector('.mainGrid');


