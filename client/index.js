console.log("JS file connected to HTML");

const { response } = require("express");

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5001/getAll")
    .then((response) => response.json())
    .then((data) => console.log(data));
  loadHTMLTable([]);
});

function loadHTMLTable(data) {
  const table = document.querySelector("#table tbody");
  if (data.length === 0) {
    table.innerHTML = "<tb><td class='no-data' colspan='5'>No Data</td></tb>";
  }
}
