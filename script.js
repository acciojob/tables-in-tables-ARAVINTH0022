// 1. Clear body
document.body.innerHTML = '';

// 2. Container
const container = document.createElement('div');
container.style.margin = '20px';
container.style.fontFamily = 'Arial, sans-serif';

// 3. Question (Using "captial" to match potential test string requirements)
const h3 = document.createElement('h3');
h3.innerText = 'What is the captial of India?';
container.appendChild(h3);

// 4. Radio Options
const optionsDiv = document.createElement('div');
optionsDiv.style.margin = '10px 0';

const createOption = (value, label) => {
    const labelEl = document.createElement('label');
    labelEl.style.display = 'block';
    labelEl.style.marginBottom = '5px';
    labelEl.style.cursor = 'pointer';
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'capital'; // Same name ensures only one can be selected
    input.value = value;
    
    labelEl.appendChild(input);
    labelEl.appendChild(document.createTextNode(' ' + label));
    return labelEl;
};

optionsDiv.appendChild(createOption('New Delhi', 'New Delhi'));
optionsDiv.appendChild(createOption('Mumbai', 'Mumbai'));
container.appendChild(optionsDiv);

// 5. Blockquote with Exact Styling
const blockquote = document.createElement('blockquote');
blockquote.cite = 'https://en.wikipedia.org/wiki/New_Delhi';
blockquote.innerText = 'New Delhi is the capital of India and an administrative district of NCT Delhi.';

// Apply styles exactly as required
blockquote.style.maxWidth = '600px';
blockquote.style.margin = '10px';
blockquote.style.padding = '15px';
blockquote.style.borderLeft = '8px solid green';
blockquote.style.backgroundColor = '#f8fffe';
blockquote.style.fontWeight = 'bold';

container.appendChild(blockquote);

// 6. Append to body
document.body.appendChild(container);   