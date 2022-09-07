let slider = document.querySelector('#sizeSlider');
let redraw = document.querySelector('#redrawButton');
let sliderValue = document.querySelector('.slider-value');
let testScreen = document.querySelector('.test-screen');

sliderValue.textContent = slider.value;

//Allow carraige returns using \r\n to be added
sliderValue.setAttribute('style', 'white-space: pre;');
testScreen.setAttribute('style', 'white-space: pre;');


slider.addEventListener('input', (e) => {
    sliderValue.textContent = slider.value;
});

redraw.addEventListener('click', (e) => {
    redrawScreen(slider.value);
});

function redrawScreen(size){
    testScreen.textContent = '';
    testScreen.textContent += `\r\nDraw ${size}x${size} screen!\r\n\r\n`;

    //Loop prototype
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            testScreen.textContent += 'x';
        }
        testScreen.textContent += `\r\n`;
    }
}