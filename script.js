let numRow = 1;
let numCol = 1;


//First feature to add rows
function addRow(){
    let main = document.querySelector("#main-grid");

    let newRow = document.createElement("tr");

    for(let i = 0; i < numCol; i++){
        //creating new cell
        let newCell = document.createElement("td");
        gridInteraction(newCell);
        newCell.classList.add("no-color");
        //adding cell to row
        newRow.appendChild(newCell);
    }

    //adding row to main
    main.appendChild(newRow);
    numRow++;
}

//Second feature to add columns
function addCol(){
    let main = document.querySelector("#main-grid");

    let rows = document.querySelectorAll("tr");

    let counter = 0;

    for(let i =0; i< numRow;i++){
        //creating new cell
        let newCell = document.createElement("td");

        gridInteraction(newCell); 

        //adding cell to col
        rows[counter].appendChild(newCell);

        counter++;
    }
    numCol++;

}

//Adding Remove Row functionality
function removeRow(){

    //accessing main
    let removeR = document.querySelector("#main-grid");
    //removing row
    removeR.deleteRow(numRow-1);
    //decrement total num
    numRow--;
}


//Adding remove Col functionality
function removeCol(){

    //accessing main
    let removeC = document.querySelector("#main-grid");

    //Accessing Rows
    let rows = document.querySelectorAll("tr");

    let counter = 0;

    for(let i = 0; i < numRow; i++){
        rows[counter].removeChild(rows[counter].lastChild);
        counter++;
    }
    numCol--;
}

//Adding coloring
let CurrentColor = document.getElementById("color").value;

console.log(CurrentColor);

function gridInteraction(cell){
    //change color after click
    cell.addEventListener("click", settingColor)

    //if not color selected add no-color class
    cell.classList.add("no-color");
}

//Adding functionality to starting cell
let startCell = document.getElementsByTagName("td");
let startCellList = [...startCell];

for(let i =0; i <startCellList.length;i++){
    let cell = startCellList[i];
    gridInteraction(cell);
}

function settingColor(){
    this.style.backgroundColor = CurrentColor;
    this.classList.remove("no-color")
}

function setColor(color){
    CurrentColor = color;
}