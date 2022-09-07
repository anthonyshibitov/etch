let slider = document.querySelector('#sizeSlider');
let redraw = document.querySelector('#redrawButton');
let sliderValue = document.querySelector('.slider-value');
let testScreen = document.querySelector('.test-screen');

let screenContainer = document.querySelector('.screen-container');

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

    //Alternative method
    //screenContainer.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
    //screenContainer.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
    
    screenContainer.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
    screenContainer.style["grid-template-columns"] = `repeat(${size}, 1fr)`;

}

//Need to set 'pixel' sizes to clientWidth/slider.value
window.addEventListener('resize', (e) => {
    console.log(`${screenContainer.clientWidth}x${screenContainer.clientHeight}`);
});
