let gridSize = 16; 

const button = document.querySelector("#size")

button.addEventListener("click", function() {
    const cells = document.querySelectorAll(".newGrid");
        
    cells.forEach(cell => {
        cell.remove();
        });

    const input = prompt("Enter Grid Size X * X - Maximum 100");
    const newSize = parseInt(input);

        if (!isNaN(newSize) && newSize > 1 && newSize < 101) {
            gridSize = newSize;
            createGrid();
        } else {
            alert("Please enter number between 1-100.");
            gridSize = 16;
            createGrid();
        }
        }
);

function createGrid () {

const grid = document.querySelector('#container');

const newGridWidth = grid.clientWidth / gridSize;
const newGridHeight = grid.clientHeight / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) {
    
    const newGrid = document.createElement('div');
    newGrid.classList.add('newGrid');
    newGrid.style.width = `${newGridWidth}px`;
    newGrid.style.height = `${newGridHeight}px`;
    grid.appendChild(newGrid);

    newGrid.addEventListener("mouseover", () => {
    newGrid.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
});
newGrid.addEventListener("mouseover", () => {
  newGrid.style.opacity = Math.min((+newGrid.style.opacity || 0) + 0.2, 1);
});
}

}

createGrid();



