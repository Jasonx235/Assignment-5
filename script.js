let numRow = 1;
let numCol = 1;


//First feature to add rows
function addRow(){
    let main = document.querySelector("#main-grid");

    let newRow = document.createElement("tr");

    for(let i = 0; i < numCol; i++){
        //creating new cell
        let newCell = document.createElement("td");
        
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