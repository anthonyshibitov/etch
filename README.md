# etch

Create a variable grid of square containers which change color when the mouse passes over them.

TO-DO  

1. [ ] Use a flex container to house the squares.
2. [ ] Containers are drawn dynamically via JS depending on what the grid size is set to using a slider. (Project recommends a text input, seems less convenient though)
3. [ ] Add a hover property to the squares to change the color to black to indicae it has been drawn
4. [ ] Add a clear button, and apply button for the slider

Off rip, it seems like the most difficult part is going to be creating the matrix. Will need two loops to iterate x times (x being the value denoted by the slider position) in the x and y axis, respectively.

Selecting the individual squares may also be difficult. I can either have the css :hover attribute change their color, or an eventListener for hover on each square, where the callback is some draw() function which can later be retrofitted for other functionality.