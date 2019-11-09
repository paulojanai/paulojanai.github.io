"use strict";

var myFunction = function myFunction() {
  setTimeout(showPage, 1200);
};

var showPage = function showPage() {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".container").style.display = "flex";
};
