const display = document.querySelector(".display");

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => display.textContent = "");

const digits = document.querySelectorAll(".digit");
digits.forEach(digits => digits.addEventListener("click", () => display.textContent += digits.textContent));

const operations = document.querySelectorAll(".operation");
operations.forEach(operations => operations.addEventListener("click", () => display.textContent += operations.textContent));

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => display.textContent += " = " + Math.round(calculator(display.textContent) * 1000) / 1000);

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

function calculator(text) {
    const array = text.split(" ");
    const math = ["+", "-", "*", "/"];
    let n = 0;
    const operators = array.filter(operator => math.includes(operator));
    while (math.some(operator => array.includes(operator))) {
        const index = array.indexOf(operators[n]);
        array.splice(index, 1);
        array[n + 1] = operate(operators[n], array[n], array[n + 1]);
        n++;
    }
    return array[n];
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
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
}

