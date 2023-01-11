const display = document.querySelector(".display");

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => display.textContent = "");

const digits = document.querySelectorAll(".digit");
digits.forEach(digits => digits.addEventListener("click", () => display.textContent += digits.textContent));

const operations = document.querySelectorAll(".operation");
operations.forEach(operations => operations.addEventListener("click", () => display.textContent += operations.textContent));

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => display.textContent += " = " + Math.round(operate(display.textContent) * 1000) / 1000);

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b == 0) return null;
    return a / b;
};

function findOperators(text) {
    const math = ["+", "-", "*", "/"];
    const operators = [];
    for (x of math) if (text.includes(x)) operators.push(x);
    return operators;
};

function operate(text) {
    operators = findOperators(text);
    operator = operators[0];
    array = text.split(operator);
    a = Number(array[0]);
    b = Number(array[1]);
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    };
};


