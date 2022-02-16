const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const topDisplay = document.getElementById("top");
const bottomDisplay = document.getElementById("bottom");
const deleteButton = document.getElementById("delete");
const decimal = document.getElementById("decimal");

//Performs the operations
function operate(a, b, operator) {
    switch(operator) {
        case "+": 
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return;
    }
};
//Declared variables for the inputs, operands, and displays output.
let newNumber = "";
let oldNumber = "";
let clickedOperand = "";
let total = "";
topDisplay.innerText = "";
bottomDisplay.innerText = 0;

//Goes through each number and adds an event listern. If clicked, it will use the numbers innertext
//and append it to the oldNumber varaible then display it on the bottom display.
numbers.forEach((number => {
    number.addEventListener("click", () => {
        oldNumber += number.innerText
        bottomDisplay.innerText = oldNumber;
    })
}));

//Adds event listerns to the operation buttons and if there is a new and an old number, then caluclate
//them. 
operators.forEach((operator => {
    operator.addEventListener("click", () => {
        if(newNumber && oldNumber) {
            calculate();
        }
        newNumber = oldNumber //oldNumber was the total number
        clickedOperand = operator.innerText;
        topDisplay.innerText = oldNumber + clickedOperand;
        oldNumber = "";
    })
}));
//Calculates the numbers by turning them into integers and returning/displaying the total.
//If there is a decimal, it fixes the position of the return total to 4.
function calculate() {
    total = operate(parseInt(newNumber), parseInt(oldNumber), clickedOperand);
    if(oldNumber === "0" && clickedOperand === "/") {
        total = "Black holes are where God divided by zero.";
        bottomDisplay.innerText = total;
        return;
    } else if(total % 1 === 0) {
        bottomDisplay.innerText = total;
        topDisplay.innerText = newNumber + " " + clickedOperand + " " + oldNumber;
        oldNumber = total;
        return;
    } else if(total % 1 !== 0) {
        total = Number(total).toFixed(4)
        bottomDisplay.innerText = total;
        topDisplay.innerText = newNumber + " " + clickedOperand + " " + oldNumber;
        oldNumber = total;
        return;
    } else (total === NaN) 
        total === "0";
        bottomDisplay.innerText = total;
        return;
};

//Listens for the "=" to be clicked then calculates().
equals.addEventListener("click", function() {
    calculate();
});

//Clears the display by resetting the variables to empty strings.
function clearDisplay() {
    clear.addEventListener("click", () => {
        oldNumber = "";
        newNumber = "";
        clickedOperand = "";
        topDisplay.innerText = "";
        bottomDisplay.innerText = "";
    })
}
clearDisplay()

//When delete is clicked, it subtracts one character off the end of oldNumbers string.
deleteButton.addEventListener("click", function() {
    oldNumber = oldNumber.substring(0, oldNumber.length - 1);
    bottomDisplay.innerText = oldNumber;
})

//If there is not a decimal yet in the string, then add the decimal to oldNumber. 
//If there is a decimal already then return.
decimal.addEventListener("click", function() {
    if(oldNumber.includes(".")) {
        return;
    }
    oldNumber += decimal.innerText;
    bottomDisplay.innerText = oldNumber;
})
