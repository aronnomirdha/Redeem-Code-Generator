document.getElementById('generate-btn').addEventListener('click', generateCodes);
document.getElementById('copy-btn').addEventListener('click', copyAllCodes);

function generateCodes() {
    const pattern = document.getElementById('code-pattern').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const characters = document.getElementById('characters').value;
    const output = document.getElementById('codes-output');
    output.innerHTML = '';

    for (let i = 0; i < quantity; i++) {
        const code = generateCode(pattern, characters);
        const codeElement = document.createElement('code');
        codeElement.textContent = code;
        output.appendChild(codeElement);
    }
}

function generateCode(pattern, characters) {
    let code = '';
    for (let char of pattern) {
        if (char === 'X') {
            code += characters[Math.floor(Math.random() * characters.length)];
        } else {
            code += char;
        }
    }
    return code;
}

function copyAllCodes() {
    const output = document.getElementById('codes-output');
    const codes = output.innerText;

    if (codes.length > 0) {
        navigator.clipboard.writeText(codes).then(() => {
            alert('All codes copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        alert('No codes to copy!');
    }
}
