const numOfRows = 101;
const numOfCols = 27;

const gridContainer = document.querySelector(".grid-container");
const addressBar = document.querySelector(".address-bar");

const addAddressBarListener = (cell, i, j) => {
  cell.addEventListener("click", () => {
    const rowAddress = i;
    const colAddress = String.fromCharCode(65 + j - 1);
    addressBar.value = `${colAddress}${rowAddress}`;
  });
};

const createRowContainer = () => {
  const rowContainer = document.createElement("div");
  rowContainer.setAttribute("class", "row-container");
  return rowContainer;
};

const createTopLeftCell = () => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "cell row-address col-address");
  return cell;
};

const createColAddressCell = (i, j) => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "cell col-address");
  cell.innerText = String.fromCharCode(65 + j - 1);
  return cell;
};

const createRowAddressCell = (i, j) => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "cell row-address");
  cell.innerHTML = i;
  return cell;
};

const createEditableCell = (i, j) => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "cell");
  cell.setAttribute("contenteditable", true);
  cell.setAttribute("rid", i);
  cell.setAttribute("cid", j);
  addAddressBarListener(cell, i, j);
  return cell;
};

const createGrid = () => {
  for (let i = 0; i < numOfRows; i++) {
    const rowContainer = createRowContainer();
    for (let j = 0; j < numOfCols; j++) {
      let cell = null;
      if (i == 0 && j == 0) {
        cell = createTopLeftCell(i, j);
      } else if (i == 0) {
        cell = createColAddressCell(i, j);
      } else if (j == 0) {
        cell = createRowAddressCell(i, j);
      } else {
        cell = createEditableCell(i, j);
      }
      rowContainer.appendChild(cell);
    }
    gridContainer.appendChild(rowContainer);
  }
};

const main = () => {
    createGrid();
}

main();
