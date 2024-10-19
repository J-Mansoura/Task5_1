const screen1 = document.querySelector(".screen1");
const userInputs = document.querySelectorAll('.key');

let currentInput = '';
let operator = '';
let firstNum = '';
let secondNum = '';
let result = 0;


userInputs.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.getAttribute('value');

        if (value === 'C') {
            currentInput = '';
            operator = '';
            firstNum = '';
            secondNum = '';
            screen1.innerHTML = '0';
            return;
        }

        if (value === '=') {
            secondNum = currentInput;
            result = calculate(firstNum, operator, secondNum);
            screen1.innerHTML = result;
            firstNum = result;
            currentInput = '';
            operator = '';
            return;
        }
        if (value == "erase"){
            currentInput.slice(0,currentInput.length-1);
            return;
        }
        if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            firstNum = currentInput;
            currentInput = '';
            return;
        }

        currentInput += value;
        screen1.innerHTML = currentInput;
    });
});

function calculate(a, operator, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Error";
    }
}
