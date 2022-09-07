let slider = document.querySelector('#sizeSlider');
let sliderValue = document.querySelector('.slider-value');
sliderValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
    sliderValue.textContent = slider.value;
    redrawScreen(slider.value);
});

function redrawScreen(size){
    sliderValue.textContent += `, draw ${size}x${size} screen!`;
}