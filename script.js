'use strict'
var form = document.querySelector("form")
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var age =document.getElementById("age")



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



