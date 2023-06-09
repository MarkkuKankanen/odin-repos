const grid = document.getElementById("grid-container");
const gridItem = document.getElementsByClassName("grid-item");
const gridDiv = document.getElementsByClassName("div");
const bnt = document.getElementById("btn");

function makeRows(rows, columns) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-columns", columns);
  for (c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    grid.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

for (var i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener(
    "mouseenter",
    (e) => {
      e.target.style.backgroundColor = "purple";
      setTimeout(() => {
        e.target.style.backgroundColor = "white";
      }, 500);
    },
    false
  );
}

bnt.addEventListener("click", () => {
  let newSize = prompt("How big grid u want? (between 1-100 )");
  if (newSize < 1 || newSize > 100) {
    alert("Choose a number between 1-100");
  } else {
    document
      .querySelectorAll(".grid-item")
      .forEach((e) => e.parentNode.removeChild(e));
    makeRows(newSize, newSize);
  }
});
