let numRow = 1;
let numCol = 1;


//First feature to add rows
function addRow(){
    let main = document.querySelector("#main-grid");

    let newRow = document.createElement("tr");

    for(let i = 0; i < numCol; i++){
        //creating new cell
        let newCell = document.createElement("td");

        //adding event handler new rows
        gridInteraction(newCell);

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

        // adding event handler to new cols
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

//Adding coloring on click
let CurrentColor = document.getElementById("color").value;

function gridInteraction(cell){
    //change color after click
    cell.addEventListener("click", settingColor)

    //if not color selected add no-color class by default
    cell.classList.add("no-color");
}

//Adding functionality to starting cell
let startCell = document.getElementsByTagName("td");
let startCellList = [...startCell];

for(let i =0; i <startCellList.length;i++){
    gridInteraction(startCellList[i]);
}

//Setting background of grid
function settingColor(){
    this.style.backgroundColor = CurrentColor;
    this.classList.remove("no-color")
}

//Updating color option when user changes it
function setColor(color){
    CurrentColor = color;
}