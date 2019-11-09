"use strict";

var showPage = function showPage() {
  document.querySelector("div.loading").style.display = "none";
  document.querySelector("div.loading-content").style.display = "block";
};

var myFunction = function myFunction() {
  setTimeout(showPage, 1200);
};
