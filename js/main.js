//shorthand for selecting elements by id
let $ = function(id){
    return document.getElementById(id);
}

//get fizz buzz values from user
//Controller
function getValues(){
    let fizzValue = $("fizzValue").value;
    let buzzValue = $("buzzValue").value;

    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //validate numbers are ints
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        
        //call fizzBuzz and pass in user values, returns the array
        let fbArray = fizzBuzz(fizzValue, buzzValue);

        //call displayResults, pass in the fbArray and write values to screen
        displayData(fbArray);
    }
    else{
        alert("You must enter integers.");
    }
}

//get numbers from 1 to 100 with a loop 
//determine multiples of each individual number
//determine multiples of both together
//logic
function fizzBuzz(fizzValue, buzzValue){
    //init returnArray
    let returnArray = [];

    //loop 0 to 100
    for (let i = 1; i <= 100; i++) {

        //check to see if divisable by both (3 & 5)
        if (i % fizzValue == 0 && i % buzzValue == 0) {     
            returnArray.push("FizzBuzz")
        } 
        //check if divisable by fizz value
        else if(i % fizzValue == 0){
            returnArray.push("Fizz")
        } 
        //check to see if divisable by buzz value (5)
        else if(i % buzzValue == 0){
            returnArray.push("Buzz")
        }
        else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

//display the data in table
//View
function displayData(fbArray){

    //get the table body element from the page
    let tableBody = $("results");

    //get the template
    let templateRow = $("fbTemplate");

    //clear table
    tableBody.innerHTML = "";

    //loops over the array and creates tr for each item
    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //select tds and put in an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }
}

