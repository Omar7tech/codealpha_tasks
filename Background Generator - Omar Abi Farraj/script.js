const generateButton = document.getElementById('generate-button');
const colorContainer = document.querySelector('.color-container');
const colorDisplay = document.getElementById('color-display');
const copyButton = document.getElementById('copy-button');

generateButton.addEventListener('click', generateRandomColor);

function generateRandomColor() {
    const randomColor = getRandomColor();
    colorContainer.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

copyButton.addEventListener('click', copyColorCodeToClipboard);

function copyColorCodeToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = colorDisplay.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Color code copied to clipboard!');
}
