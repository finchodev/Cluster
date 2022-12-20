function go(link) {
    if (link == '') {
        alert('Bruh you need to insert a url!');
    } else if (!link.includes("http://")) {
        link = "http://" + link;
    };
    window.open("/sw/" + xor.encode(link), "_self");
};

function clig2() {
    go("discord.gg/dPUsGNgzEM");
}

document.addEventListener("keydown", ea => {
    if (ea.keyCode == "9") {
        ea.preventDefault();
        parent.document.getElementById("urlbar").focus();
    }
});

function patr() {
    window.open('https://www.patreon.com/fracital?fan_landing=true');
}
function tik() {
    window.open('https://tiktok.com/@fracital');
}

// if (localStorage.getItem("theme") === "lime") {
//     document.getElementById("rells").href = "../styles/limeh.css";
// } else if (localStorage.getItem("theme") === "amoled") {
//     document.getElementById("rells").href = "../styles/amoledh.css";
// } else if(localStorage.getItem("theme") === "classic") {
//     document.getElementById("rels").href = "../styles/home.css";
// }