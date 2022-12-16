let output = document.getElementById("operand");

function display(num) {
    output.value += num;
}

function calculate() {
    try {
        output.value = eval(output.value);
        output.classList.add("resent");
    }
    catch(err) {
        alert("Invalid");
    }
}

function checkRESENT() {
    if(output.classList.contains("resent")) {
        output.classList.remove("resent");
        output.value = '';
    }
}