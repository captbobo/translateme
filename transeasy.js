
const tableRows = [...document.getElementsByTagName("tr")];
while (!tableRows[0].className) {
  tableRows.shift();
  // because since the first is shifted...
}
