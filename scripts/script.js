function regenerateGrid(squares = 16, size = 500 / squares) {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < (squares * squares); i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        square.id = `square${i}`;
        square.setAttribute("style", `height: ${size}px; width: ${size}px;`);
        container.appendChild(square);
    }
}

const container = document.querySelector("#container");
const buttonGrid = document.querySelector("#new-grid");

regenerateGrid();

container.addEventListener("mouseover", (event) => {
    event.target.classList.add("collared");
});

buttonGrid.addEventListener("click", (event) => {
    let userInput;
    while (!userInput || isNaN(userInput) || (userInput < 1 || userInput > 100)) {
        userInput = prompt("Enter new row count (between 1 and 100)");
    }
    squares = +userInput;
});
