const storageDb = []

const getCurrentSelectedCellAndCellProperties = () => {
    const addressBarValue = addressBar.value;
    const colAddress = addressBarValue.charCodeAt(0) - 65 + 1;
    const rowAddress = Number(addressBarValue.slice(1));
    const cell = document.querySelector(`[rid='${rowAddress}'][cid='${colAddress}']`)
    const cellProperties = storageDb[rowAddress][colAddress];
    return [cell, cellProperties];
}

const createCellDefaultProperties = () => {
    return {
        fontFamily: 'monospace',
        fontSize: 14,
        bold: false,
        italic: false,
        underline: false,
        aligned: 'left',
    }
}

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
}

const addEventListenerToFontFamilyAction = () => {
  const fontFamilyInput = document.querySelector(".font-family");
  fontFamilyInput.addEventListener("change", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["fontFamily"] = fontFamilyInput.value;
    cell.style.fontFamily = cellProperties["fontFamily"];
  });
};

const addEventListenerToFontSizeAction = () => {
  const fontSizeInput = document.querySelector(".font-size");
  fontSizeInput.addEventListener("change", () => {
    const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
    cellProperties["fontSize"] = fontSizeInput.value;
    cell.style.fontSize = `${cellProperties["fontSize"]}px`;
  });
};

const addEventListenerToBoldAction = () => {
    const boldButton = document.querySelector('.bold');
    boldButton.addEventListener('click', () => {
        const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
        cellProperties['bold'] = !cellProperties['bold'];
        cell.style.fontWeight = cellProperties['bold'] ? 'bold' : 'normal';
    });
}

const addEventListenerToItalicAction = () => {
    const italicButton = document.querySelector(".italic");
    italicButton.addEventListener("click", () => {
      const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
      cellProperties["italic"] = !cellProperties["italic"];
      cell.style.fontStyle = cellProperties["italic"] ? "italic" : "normal";
    });
}

const addEventListenerToUnderlineAction = () => {
    const underlineButton = document.querySelector('.underline');
    underlineButton.addEventListener('click', () => {
        const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
        cellProperties['underline'] = !cellProperties['underline'];
        cell.style.textDecoration = cellProperties['underline'] ? 'underline' : 'none';
    });
}

const addEventListenerToLeftAlignAction = () => {
    const leftAlignButton = document.querySelector('.align-left');
    leftAlignButton.addEventListener("click", () => {
      const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
      cellProperties["aligned"] = 'left';
      cell.style.justifyContent = "left";
    });
}

const addEventListenerToCenterAlignAction = () => {
    const centerAlignButton = document.querySelector('.align-center');
    centerAlignButton.addEventListener("click", () => {
      const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
      cellProperties["aligned"] = 'center';
      cell.style.justifyContent = "center";
    });
}

const addEventListenerToRightAlignAction = () => {
    const rightAlignButton = document.querySelector('.align-right');
    rightAlignButton.addEventListener("click", () => {
      const [cell, cellProperties] = getCurrentSelectedCellAndCellProperties();
      cellProperties["aligned"] = 'right';
      cell.style.justifyContent = 'right';
    });
}

const addEventListenersToPropertyActions = () => {
    addEventListenerToFontFamilyAction();
    addEventListenerToFontSizeAction();
    addEventListenerToBoldAction();
    addEventListenerToItalicAction();
    addEventListenerToUnderlineAction();
    addEventListenerToLeftAlignAction();
    addEventListenerToCenterAlignAction();
    addEventListenerToRightAlignAction();
}

const storageMain = () => {
    createDefaultStorageDBForSheet();
    addEventListenersToPropertyActions();
}

storageMain();