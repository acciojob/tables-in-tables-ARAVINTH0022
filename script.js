<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Nested HTML Tables</title>
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table, th, td {
    border: 1px solid black;
  }
  th, td {
    padding: 8px;
    text-align: left;
    vertical-align: top;
  }
  .black-bg {
    background-color: black;
    color: white;
  }
</style>
</head>
<body>

<h2>Tables in Tables</h2>
<div id="container"></div>

<script>
  // Helper to create a nested table
  function createNestedTable(title, includeList, includeBlackCell) {
    const table = document.createElement('table');

    // Header row
    const headerRow = document.createElement('tr');
    [title, 'Column 1', 'Column 2'].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Row 1
    const row1 = document.createElement('tr');
    const firstCell = document.createElement('td');

    if (includeList) {
      const ul = document.createElement('ul');
      ['List item 1', 'List item 2', 'List item 3'].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      firstCell.appendChild(ul);
    } else if (includeBlackCell) {
      firstCell.textContent = 'HTML';
      firstCell.classList.add('black-bg');
    } else {
      firstCell.textContent = 'Row 1';
    }
    row1.appendChild(firstCell);

    const data1 = document.createElement('td');
    data1.textContent = 'Data 1';
    row1.appendChild(data1);

    const data2 = document.createElement('td');
    data2.textContent = 'Data 2';
    row1.appendChild(data2);

    table.appendChild(row1);

    // Row 2 (skip if list is included, to match original layout)
    if (!includeList) {
      const row2 = document.createElement('tr');
      const cellA = document.createElement('td');
      cellA.textContent = 'Row 2';
      const cellB = document.createElement('td');
      cellB.textContent = 'Data 3';
      const cellC = document.createElement('td');
      cellC.textContent = 'Data 4';
      row2.appendChild(cellA);
      row2.appendChild(cellB);
      row2.appendChild(cellC);
      table.appendChild(row2);
    }

    return table;
  }

  // Build the main table
  const mainTable = document.createElement('table');
  mainTable.classList.add('main-table');

  // Row 1: Nested Table 1 and Nested Table 2 (with black cell)
  const mainRow1 = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.appendChild(createNestedTable('Nested Table 1', false, false));
  const cell2 = document.createElement('td');
  cell2.appendChild(createNestedTable('Nested Table 2', false, true));
  mainRow1.appendChild(cell1);
  mainRow1.appendChild(cell2);

  // Row 2: Nested Table 3 (with list) and Nested Table 4
  const mainRow2 = document.createElement('tr');
  const cell3 = document.createElement('td');
  cell3.appendChild(createNestedTable('Nested Table 3', true, false));
  const cell4 = document.createElement('td');
  cell4.appendChild(createNestedTable('Nested Table 4', false, false));
  mainRow2.appendChild(cell3);
  mainRow2.appendChild(cell4);

  mainTable.appendChild(mainRow1);
  mainTable.appendChild(mainRow2);

  document.getElementById('container').appendChild(mainTable);
</script>

</body>
</html>