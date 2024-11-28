function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];

    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }

    if (value === '.' && display.value.includes('.')) {
        return;
    }

    display.value += value;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error!';
    }
}

function calculateSquareRoot() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(value);
}

function calculateExponent() {
    const base = parseFloat(document.getElementById('display').value);
    const exponent = prompt("Enter exponent:");
    document.getElementById('display').value = Math.pow(base, exponent);
}

function calculatePercentage() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = value / 100;
}
document.getElementById('navigate-button').addEventListener('click', function() {
    window.location.href = 'index1.html';
});