function selectElement(selector) {
    return document.querySelectorAll(selector);
}

let output = document.querySelector("#operand");
let btn = selectElement(".btn");
let eq = selectElement(".eq");
let prevOPERAND = selectElement("#prev-operand");

for(item of btn) {
    item.addEventListener("click", (e) => {
        btntext=e.target.innerText;
        output.value+=btntext;
        if(output.classList.contains("eqd")) {
            if(btntext=="x") {
                output.classList.remove("eqd");
            } else {
                output.value='';
                output.value+=btntext;
                output.classList.remove("eqd");
            }
        }
    });
}

function eqb() {
    output.value=eval(output.value);
    output.classList.add('eqd');
}

function sin() {
    output.value=Math.sin(output.value)
}

function cos() {
    output.value=Math.cos(output.value)
}

function tan() {
    output.value=Math.tan(output.value)
}

function log() {
    output.value=Math.log(output.value)
}

function sqrt() {
    output.value=Math.sqrt(output.value)
}