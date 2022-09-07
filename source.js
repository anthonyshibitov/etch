let slider = document.querySelector('#sizeSlider');
let redraw = document.querySelector('#redrawButton');
let sliderValue = document.querySelector('.slider-value');
let testScreen = document.querySelector('.test-screen');

let screenContainer = document.querySelector('.screen-container');

sliderValue.textContent = `${slider.value}x${slider.value} canvas`;

//Allow carraige returns using \r\n to be added
sliderValue.setAttribute('style', 'white-space: pre;');

slider.addEventListener('input', (e) => {
    sliderValue.textContent = `${slider.value}x${slider.value} canvas`;
});

redraw.addEventListener('click', (e) => {
    redrawScreen(slider.value);
});

function redrawScreen(size){
    while(screenContainer.firstChild){
        screenContainer.removeChild(screenContainer.firstChild);
    }

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let pixelDiv = document.createElement('div');
            pixelDiv.setAttribute('class', 'pixelDiv');
            pixelDiv.addEventListener('mouseover', (e) => {
                //Implement click and drag, rather than just hover
                if(e.buttons == 1){
                    e.preventDefault();
                    pixelDiv.style["background"] = "black";
                }
            });
            screenContainer.appendChild(pixelDiv);
            
        }
    }

    screenContainer.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
    screenContainer.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
}

redrawScreen(32);