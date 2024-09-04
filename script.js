//public variables
const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize");
resizeButton.textContent = "Click Here";

const gridSize = 16;

function createGrid(size){

    container.textContent = "";

    const totalSquares = size * size;
    
    for (let i = 0; i < totalSquares; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.backgroundColor = getRandomColor();
        square.dataset.brightness = 100;
        
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = getRandomColor();
        })
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "black";
        })

        console.log(square)
        container.appendChild(square);
    }

    const newContainerSize = 960;
    const squareSize = newContainerSize / size;

    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.flex = `0 0 ${100 / size}%`;
        square.style.height = `${squareSize}px`;
    });
    
}

createGrid(16);

function resizeGrid(){
    let newGridSize = parseInt(prompt("What's the number of squares per side?", "16"));
        
        if(isNaN(newGridSize) || newGridSize <= 0 || newGridSize >= 100){
            alert("Number must greater than 0 and less than 100");
            return;
        }


    createGrid(newGridSize);

}

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//events
resizeButton.addEventListener("click", resizeGrid);

