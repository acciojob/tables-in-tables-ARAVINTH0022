// 1. Clear body to remove old tables
document.body.innerHTML = '';

// 2. Loop to create exactly 5 tables
for (let i = 0; i < 5; i++) {
    const table = document.createElement('table');
    table.border = '1'; // Optional for visibility
    table.style.margin = '10px';

    const tr = document.createElement('tr');

    if (i === 1) {
        // Specific headers for the 2nd table (Index 1)
        const th1 = document.createElement('th');
        th1.innerText = 'Nested Table 2';
        
        const th2 = document.createElement('th');
        th2.innerText = 'Column 1';
        
        const th3 = document.createElement('th');
        th3.innerText = 'Column 2';
        
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        
        // Add a data row for completeness
        const dataRow = document.createElement('tr');
        dataRow.innerHTML = '<td>Data 1</td><td>Data 2</td><td>Data 3</td>';
        table.appendChild(tr);
        table.appendChild(dataRow);
    } else {
        // Generic headers for other tables
        const th = document.createElement('th');
        th.innerText = `Table ${i + 1}`;
        tr.appendChild(th);
        
        const dataRow = document.createElement('tr');
        dataRow.innerHTML = '<td>Generic Data</td>';
        table.appendChild(tr);
        table.appendChild(dataRow);
    }

    document.body.appendChild(table);
}   