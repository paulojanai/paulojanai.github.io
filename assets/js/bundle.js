"use strict";

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1200);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("container").style.display = "flex";
}
