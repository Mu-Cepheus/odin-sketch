function regenerateGrid(squares = 16) {
    if (squares < 1 || squares > 100) {
        squares = 16;
    }
    let size = 500 / squares;
    while (container.firstChild) {
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

function randomizeColor() {
    let hue = Math.random() * 361;
    let saturation = Math.random() * 101;
    let lightness = Math.random() * 101;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

const container = document.querySelector("#container");
const buttonGrid = document.querySelector("#new-grid-btn");

regenerateGrid();

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.style.backgroundColor) {
        if (target.style.filter.includes("brightness")) {
            let brightness = target.style.filter.slice(target.style.filter.indexOf("(") + 1, target.style.filter.indexOf(")"));
            if (brightness > 0) {
                let newBrightness = +brightness - 0.1;
                target.style.filter = `brightness(${newBrightness})`;
            }
        } else {
            target.style.filter = `brightness(0.9)`;
        }
    } else {
        target.style.backgroundColor = randomizeColor();
    }
});

buttonGrid.addEventListener("click", (event) => {
    let userInput;
    while (!userInput || isNaN(userInput) || (userInput < 1 || userInput > 100)) {
        userInput = prompt("Enter new row count (between 1 and 100)");
    }
    regenerateGrid(+userInput);
});
