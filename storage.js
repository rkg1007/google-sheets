const storageDb = [];
let activePropertyButtonBackgroundColor = "#d1d8e0";
let inactivePropertyButtonBackgroundColor = "#ecf0f1";

const getCurrentSelectedCellAndCellProperties = () => {
  const addressBarValue = addressBar.value;
  const colAddress = addressBarValue.charCodeAt(0) - 65 + 1;
  const rowAddress = Number(addressBarValue.slice(1));
  const cell = document.querySelector(
    `.cell[rid='${rowAddress}'][cid='${colAddress}']`
  );
  const cellProperties = storageDb[rowAddress][colAddress];
  return [cell, cellProperties];
};

const createCellDefaultProperties = () => {
  return {
    fontFamily: "monospace",
    fontSize: 14,
    bold: false,
    italic: false,
    underline: false,
    aligned: "left",
    innerText: "",
  };
};

const createDefaultStorageDBForSheet = () => {
  for (let i = 0; i <= numOfRows; i++) {
    const row = [];
    for (let j = 0; j <= numOfCols; j++) {
      if (i != 0 && j != 0) {
        const cellDefaultProperties = createCellDefaultProperties();
        row.push(cellDefaultProperties);
      }
    }
    storageDb.push(row);
  }
};

const changeUIAccordingToFontFamilyProperty = (cell, cellProperties) => {
  const fontFamilyInput = document.querySelector(".font-family");
  cell.style.fontFamily = cellProperties["fontFamily"];
  fontFamilyInput.value = cellProperties["fontFamily"];
};

const addEventListenerToFontFamilyAction = () => {
  const fontFamilyInput = document.querySelector(".font-family");
  fontFamilyInput.addEventListener("change", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["fontFamily"] = fontFamilyInput.value;
    changeUIAccordingToFontFamilyProperty(cell, cellProperties);
  });
};

const changeUIAccordingToFontSizeProperty = (cell, cellProperties) => {
  const fontSizeInput = document.querySelector(".font-size");
  cell.style.fontSize = `${cellProperties["fontSize"]}px`;
  fontSizeInput.value = cellProperties["fontSize"];
};

const addEventListenerToFontSizeAction = () => {
  const fontSizeInput = document.querySelector(".font-size");
  fontSizeInput.addEventListener("change", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["fontSize"] = fontSizeInput.value;
    changeUIAccordingToFontSizeProperty(cell, cellProperties);
  });
};

const changeUIAccordingToBoldProperty = (cell, cellProperties) => {
  const boldButton = document.querySelector(".bold");
  cell.style.fontWeight = cellProperties["bold"] ? "bold" : "normal";
  boldButton.style.backgroundColor = cellProperties["bold"]
    ? activePropertyButtonBackgroundColor
    : inactivePropertyButtonBackgroundColor;
};

const addEventListenerToBoldAction = () => {
  const boldButton = document.querySelector(".bold");
  boldButton.addEventListener("click", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["bold"] = !cellProperties["bold"];
    changeUIAccordingToBoldProperty(cell, cellProperties);
  });
};

const changeUIAccordingToItaclicProperty = (cell, cellProperties) => {
  const italicButton = document.querySelector(".italic");
  cell.style.fontStyle = cellProperties["italic"] ? "italic" : "normal";
  italicButton.style.backgroundColor = cellProperties["italic"]
    ? activePropertyButtonBackgroundColor
    : inactivePropertyButtonBackgroundColor;
};

const addEventListenerToItalicAction = () => {
  const italicButton = document.querySelector(".italic");
  italicButton.addEventListener("click", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["italic"] = !cellProperties["italic"];
    changeUIAccordingToItaclicProperty(cell, cellProperties);
  });
};

const changeUIAccordingToUnderLineProperty = (cell, cellProperties) => {
  const underlineButton = document.querySelector(".underline");
  cell.style.textDecoration = cellProperties["underline"]
    ? "underline"
    : "none";
  underlineButton.style.backgroundColor = cellProperties["underline"]
    ? activePropertyButtonBackgroundColor
    : inactivePropertyButtonBackgroundColor;
};

const addEventListenerToUnderlineAction = () => {
  const underlineButton = document.querySelector(".underline");
  underlineButton.addEventListener("click", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["underline"] = !cellProperties["underline"];
    changeUIAccordingToUnderLineProperty(cell, cellProperties);
  });
};

const changeUIAccordingToLeftAlignProperty = (cell, cellProperties) => {
  if (cellProperties["aligned"] == "left") {
    cellProperties["aligned"] = "left";
    const leftAlignButton = document.querySelector(".align-left");
    cell.style.justifyContent = "left";
    leftAlignButton.style.backgroundColor = activePropertyButtonBackgroundColor;
    document.querySelector(".align-center").style.backgroundColor =
      inactivePropertyButtonBackgroundColor;
    document.querySelector(".align-right").style.backgroundColor =
      inactivePropertyButtonBackgroundColor;
  }
};

const addEventListenerToLeftAlignAction = () => {
  const leftAlignButton = document.querySelector(".align-left");
  leftAlignButton.addEventListener("click", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["aligned"] = "left";
    changeUIAccordingToLeftAlignProperty(cell, cellProperties);
  });
};

const changeUIAccordingToCenterAlignProperty = (cell, cellProperties) => {
  if (cellProperties["aligned"] == "center") {
    cell.style.justifyContent = "center";
    const centerAlignButton = document.querySelector(".align-center");
    centerAlignButton.style.backgroundColor =
      activePropertyButtonBackgroundColor;
    document.querySelector(".align-left").style.backgroundColor =
      inactivePropertyButtonBackgroundColor;
    document.querySelector(".align-right").style.backgroundColor =
      inactivePropertyButtonBackgroundColor;
  }
};

const addEventListenerToCenterAlignAction = () => {
  const centerAlignButton = document.querySelector(".align-center");
  centerAlignButton.addEventListener("click", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["aligned"] = "center";
    changeUIAccordingToCenterAlignProperty(cell, cellProperties);
  });
};

const changeUIAccordingToRightAlignProperty = (cell, cellProperties) => {
  if (cellProperties["aligned"] == "right") {
    cell.style.justifyContent = "right";
    const rightAlignButton = document.querySelector(".align-right");
    rightAlignButton.style.backgroundColor =
      activePropertyButtonBackgroundColor;
    document.querySelector(".align-left").style.backgroundColor =
      inactivePropertyButtonBackgroundColor;
    document.querySelector(".align-center").style.backgroundColor =
      inactivePropertyButtonBackgroundColor;
  }
};

const addEventListenerToRightAlignAction = () => {
  const rightAlignButton = document.querySelector(".align-right");
  rightAlignButton.addEventListener("click", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["aligned"] = "right";
    changeUIAccordingToRightAlignProperty(cell, cellProperties);
  });
};

const addEventListenersToPropertyActions = () => {
  addEventListenerToFontFamilyAction();
  addEventListenerToFontSizeAction();
  addEventListenerToBoldAction();
  addEventListenerToItalicAction();
  addEventListenerToUnderlineAction();
  addEventListenerToLeftAlignAction();
  addEventListenerToCenterAlignAction();
  addEventListenerToRightAlignAction();
};

const addEventListenersToCells = () => {
  for (let i = 1; i <= numOfRows; i++) {
    for (let j = 1; j <= numOfCols; j++) {
      const cell = document.querySelector(`.cell[rid='${i}'][cid='${j}']`);
      cell.addEventListener("click", () => {
        const cellProperties = storageDb[i][j];
        changeUIAccordingToFontFamilyProperty(cell, cellProperties);
        changeUIAccordingToFontSizeProperty(cell, cellProperties);
        changeUIAccordingToBoldProperty(cell, cellProperties);
        changeUIAccordingToItaclicProperty(cell, cellProperties);
        changeUIAccordingToUnderLineProperty(cell, cellProperties);
        changeUIAccordingToLeftAlignProperty(cell, cellProperties);
        changeUIAccordingToCenterAlignProperty(cell, cellProperties);
        changeUIAccordingToRightAlignProperty(cell, cellProperties);
      });
      cell.addEventListener("input", () => {
        const cellProperties = storageDb[i][j];
        cellProperties["innerText"] = cell.innerText;
      });
    }
  }
};

const storageMain = () => {
  createDefaultStorageDBForSheet();
  addEventListenersToPropertyActions();
  addEventListenersToCells();
};

storageMain();
