'use strict'
var form = document.querySelector("form")
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var age =document.getElementById("age")

function checkEmptyInput()
   {
     var isEmpty = false,
      firstName = document.getElementById("firstName").value,
      lastName = document.getElementById("lastName").value,
      age = document.getElementById("age").value; 
            
        if(firstName === ""){
        alert("Įveskite duomenis");
      isEmpty = true;
        }
        else if(lastName === ""){
        alert("Įveskite duomenis");
        isEmpty = true;
        }
        else if(age === ""){
        alert("Įveskite duomenis");
        isEmpty = true;
        }
        return isEmpty;
    }


function removeFirstRow() {
  var x = document.getElementById("tableBody");
  x.deleteRow(0);
}

function createRow() {
  var x = document.getElementById("tableBody");
  var row = x.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = "firstName";
  cell2.innerHTML = "lastName";
  cell3.innerHTML = "age";

}



