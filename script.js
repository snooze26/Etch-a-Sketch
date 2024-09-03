const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize");
alertButton.textContent = "Click Here";

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

function resizeGrid(){
    let newGridSize = parseInt(prompt("What's the number of squares per side?", "16"));
   
    for (let i = 0; i < 100; i++){
        
        if(isNaN(newGridSize) || newGridSize <= 0){
            alert("Number must greater than 0");
            return;
        }

        const newContainerSize = 960;
        const squareSize = newContainerSize / newGridSize;
        const css = document.styleSheets[0];
        css.insertRule(`.grid-square { flex: 0 0 ${100 / newGridSize}%; height: ${squareSize}px; }`, css.cssRules.length);
    }
        
    createGrid(newGridSize);

}

resizeButton.addEventListener("click", resizeGrid);

createGrid(gridSize);
