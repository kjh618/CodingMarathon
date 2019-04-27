let selectorTables = document.getElementsByClassName('selector_table');
for (let elem of selectorTables) {
  for (let row of elem.rows) {
    for (let cell of row.cells) {
      let input = cell.getElementsByTagName('input')[0];
      cell.onclick = () => cellClicked(input);
    }
  }
}