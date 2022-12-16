const inputEL = document.querySelector(".input");
const operationEL = document.querySelector(".operation .value");
const outputEL = document.querySelector(".result .value");
const outputRES = document.querySelector(".result");

const OPERATORS = ["+", "-", "*", "/"];
const POWER = 'POWER(', FACTORIAL = "FACTORIAL";
let data = {
    operation : [],
    formula : []
}

// CALCULATOR BUTTONS
let calculator_buttons = [  
    {
        name : "rad",
        symbol : "Rad",
        formula : false,
        type : "key"
    },
    {
        name : "deg",
        symbol : "Deg",
        formula : false,
        type : "key"
    },
    {
        name : "square-root",
        symbol : "√",
        formula : "Math.sqrt",
        type : "math_function"
    },
    {
        name : "open-parenthesis",
        symbol : "(",
        formula : "(",
        type : "number"
    },
    {
        name : "close-parenthesis",
        symbol : ")",
        formula : ")",
        type : "number"
    },
    {
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },{
        name : "pi",
        symbol : "π",
        formula : "Math.PI",
        type : "number"
    },{
        name : "e",
        symbol : "e",
        formula : "Math.E",
        type : "number"
    },{
        name: "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name: "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name: "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "ANS",
        symbol : "ANS",
        formula : "ans",
        type : "number"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    }
];

function createCalcButtons() {
    const btnsPerRow = 8;
    let addedBtns = 0;
    
    calculator_buttons.forEach(button => {
        if(addedBtns % btnsPerRow == 0) {
            inputEL.innerHTML += `<div class="row"></div>`;
        }
        const row = document.querySelector(".row:last-child");
        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`
        addedBtns++;
    })
};
createCalcButtons();

let RADIAN = true;

let radBTN = document.getElementById("rad");
let degBTN = document.getElementById("deg");

radBTN.classList.add("active-angle")

function angleToggler() {
    radBTN.classList.toggle("active-angle");
    degBTN.classList.toggle("active-angle");
}

inputEL.addEventListener("click", event => {
    const targetBTN = event.target;
    calculator_buttons.forEach(button => {
        if(button.name == targetBTN.id) calculator(button);
    });
});

function calculator(button) {
    if(button.type == "operator") {
        if(outputRES.classList.contains("resent")) {
            outputRES.classList.remove("resent");
        }
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    } else if(button.type == "number") {
        if(outputRES.classList.contains("resent")) {
            outputRES.classList.remove("resent");
            document.querySelector("#resv").innerHTML = "";
        }
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    } else if(button.type == "trigo_function") {
        data.operation.push(button.symbol + "(");
        data.formula.push(button.formula);
    } else if(button.type == "math_function") {
        let symbol, formula;
            symbol = button.symbol + "(";
            formula = button.formula + "(";
            data.operation.push(symbol);
            data.formula.push(formula);
    } else if(button.type == "key") {
        if(outputRES.classList.contains("resent")) {
            outputRES.classList.remove("resent");
        }
        if(button.name == "clear") {
            data.operation = [];
            data.formula = [];

            outputRES.classList.remove("resent");
            updateOutputResult("0");
        } else if(button.name == "delete") {
            data.operation.pop();
            data.formula.pop();
        } else if(button.name == "rad") {
            RADIAN = true;
            angleToggler();
        } else if(button.name == "deg") {
            RADIAN = false;
            angleToggler();
        }
    } else if(button.type == "calculate") {
        formulaSTR = data.formula.join('');
        let result = eval(formulaSTR);
        outputRES.classList.add("resent");
        updateOutputResult(result);
    }
    updateOutputOperation(data.operation.join(''));
};

function updateOutputOperation(operation) {
    operationEL.innerHTML = operation;
}

function updateOutputResult(result) {
    outputEL.innerHTML = result;
}

// GAMMA FUNCTINON
function gamma(n) {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if(n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
      n--;
      var x = p[0];
      for(var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}

function trigo(callback, angle) {
    
}

function inv_trigo(callback, angle) {

}