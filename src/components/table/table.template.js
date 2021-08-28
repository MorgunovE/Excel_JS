// 162
const CODES = {
  A: 65,
  Z: 90
}
// 204-2
// function toCell(row, col) { // 179-2 and 204-1
//   // console.log(col)
//   // 179-3
//   return `
//     <div class="cell" contenteditable data-col="${col}" data-row="${row}"></div>
//   `
// }
// 204-3
function toCell(row) {
  return function(_, col) {
    // 211
    return `
      <div
        class="cell"
        contenteditable
        data-col="${col}"
        data-type="cell"
        data-id="${row}:${col}"
        ></div>
    `
  }
}

function toColumn(col, index) { // 179
  // console.log(index)
  // 171 and 173-1 and 175 and 179-1
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(index, content) {
  // 171-1 and 171-2
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : '' // 173
  // 184
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  // console.log(cols)
 
  rows.push(createRow(null, cols))
  // 204
  // for (let i = 0; i < rowCount; i++) {
  //   const cells = new Array(colsCount)
  //       .fill('')
  //       .map(toCell)
  //       .join('')
  // rows.push(createRow(i + 1, cells))
  // 204-1
  for (let row = 0; row < rowCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        // .map((_, col)=>toCell(row))
        .map(toCell(row))
        .join('')
    
    rows.push(createRow(row + 1, cells))
  }
  return rows.join('')
}
