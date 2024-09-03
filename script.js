const container = document.querySelector("#container");
const alertButton = document.querySelector("#alert");

const gridSize = 16;

function createGrid(size){
    const totalSquares = size * size;
    
    for (let i = 0; i < totalSquares; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        console.log(square)
        container.appendChild(square);
    }
}

createGrid(gridSize);
