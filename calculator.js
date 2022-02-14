
//Create functions addition, subtraction, multiplication,
//and division.

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
//Takes two numbers and operates on them by calling previous functions
function operatorMan(a, symbol, b) {
    switch(symbol) {
    case "+":
        symbol === "+";
        return add(a, b);
    case "-":
        symbol === "-";
        return sub(a, b);
    case "*":
        symbol === "*";
        return mult(a, b);
    case "/":
        symbol === "/";
        return div(a, b);
    default:
        console.log("Error") 
    }
}
 //Whenever you click a button, it will display that buttons innerText
 //on the display.
const displayTop = document.getElementById("top")
const displayBottom = document.getElementById("bottom");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
firstValue = "";
secondValue = "";
operator = "";
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if(operator === "") {
            firstValue += e.target.innerText;
            displayBottom.innerText = firstValue;
        } else {
            secondValue += e.target.innerText;
            displayBottom.innerText = secondValue;
        }
   }
)});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if(e.target.innerText !== "=") {
            operator = e.target.innerText;
            displayTop.innerText = firstValue + operator;
            console.log(operator);
            console.log(firstValue);
        } else {
            console.log(secondValue);
            switch(operator) {
                case "+":
                    displayBottom.innerText = parseInt(firstValue) + parseInt(secondValue);
                    break;
                case "-":
                    displayBottom.innerText = parseInt(firstValue) - parseInt(secondValue);
                    break;
                case "*":
                    displayBottom.innerText = parseInt(firstValue) * parseInt(secondValue);
                    break;
                case "/":
                    displayBottom.innerText = parseInt(firstValue) / parseInt(secondValue);
                    break;
                default:
                    break;
            }       
        }
    })
})

function clearDisplay() {
    clear.addEventListener("click", () => {
        firstValue = "";
        secondValue = "";
        operator = "";
        displayTop.innerText = "";
        displayBottom.innerText = "";
    })
}

clearDisplay()

