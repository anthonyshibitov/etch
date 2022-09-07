# etch

Create a variable grid of square containers which change color when the mouse passes over them.

TO-DO  

1. [X] Use a ~~flex~~ grid container to house the squares.
2. [X] Containers are drawn dynamically via JS depending on what the grid size is set to using a slider. (Project recommends a text input, seems less convenient though)
3. [X] Add a ~~hover~~ click-and-drag ~~property~~ move eventListener to the squares to change the color to black to indicae it has been drawn
4. [X] Add a clear button, and apply button for the slider

Off rip, it seems like the most difficult part is going to be creating the matrix. Will need two loops to iterate x times (x being the value denoted by the slider position) in the x and y axis, respectively.

Selecting the individual squares may also be difficult. I can either have the css :hover attribute change their color, or an eventListener for hover on each square, where the callback is some draw() function which can later be retrofitted for other functionality.

Formatting the grid elements may also be tricky considering it will be built in JS rather than the HTML/CSS. They should all be square (obviously), arranged in a square (yup). I could use flexbox for this, as I already have some experience with it, but I don't think it would be the easiest choice. CSS Grid will probably be a better suited choice for this, but I guess I won't know until I dive into Grid a bit more.