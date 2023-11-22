const numOfRows = 101;
const numOfCols = 27;

const gridContainer = document.querySelector('.grid-container');

const createRowContainer = () => {
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row-container');
    return rowContainer;
}

const createTopLeftCell = () => {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell row-address col-address');
    return cell;
}

const createColAddressCell = () => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "col-address cell");
  return cell;
};

const createRowAddressCell = () => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "cell row-address");
  return cell;
};

const createEditableCell = () => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "cell");
  cell.setAttribute('contenteditable', true);
  return cell;
};

for (let i = 0; i < numOfRows; i++) {
  const rowContainer = createRowContainer();
  for (let j = 0; j < numOfCols; j++) {
    let cell = null;
    if (i == 0 && j == 0) {
      cell = createTopLeftCell();
    } else if (i == 0) {
      cell = createColAddressCell();
    } else if (j == 0) {
      cell = createRowAddressCell();
    } else {
      cell = createEditableCell();
    }
    rowContainer.appendChild(cell);
  }
  gridContainer.appendChild(rowContainer);
}