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