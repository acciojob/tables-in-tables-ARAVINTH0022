// 1. Clear body to ensure a clean state
document.body.innerHTML = '';

// 2. Create exactly 5 tables
for (let i = 0; i < 5; i++) {
    const table = document.createElement('table');
    
    // Add a border for visibility (optional but helpful)
    table.border = '1';
    table.style.margin = '10px';

    // Create a row for headers
    const tr = document.createElement('tr');

    // Specific Content for the 2nd Table (Index 1)
    if (i === 1) {
        const th1 = document.createElement('th');
        th1.innerText = 'Nested Table 2';
        
        const th2 = document.createElement('th');
        th2.innerText = 'Column 1';
        
        const th3 = document.createElement('th');
        th3.innerText = 'Column 2';
        
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
    } 
    // Generic Content for other tables (0, 2, 3, 4) to ensure they exist
    else {
        const th = document.createElement('th');
        th.innerText = `Table ${i + 1} Header`;
        tr.appendChild(th);
        
        // Add a dummy cell so the table has content
        const td = document.createElement('td');
        td.innerText = 'Data';
        const tr2 = document.createElement('tr');
        tr2.appendChild(td);
        table.appendChild(tr); // Append header row
        table.appendChild(tr2); // Append data row
        document.body.appendChild(table);
        continue; // Skip the rest of the loop for generic tables
    }

    table.appendChild(tr);
    
    // Add a dummy data row for the specific table as well
    const dataRow = document.createElement('tr');
    const td1 = document.createElement('td'); td1.innerText = 'Data 1';
    const td2 = document.createElement('td'); td2.innerText = 'Data 2';
    const td3 = document.createElement('td'); td3.innerText = 'Data 3';
    dataRow.appendChild(td1);
    dataRow.appendChild(td2);
    dataRow.appendChild(td3);
    table.appendChild(dataRow);

    document.body.appendChild(table);
}   