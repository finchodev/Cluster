const cursor = document.getElementById("cursor");
const norm = document.querySelector(".normc");
const hov = document.querySelector(".hovc");
const inp = document.querySelector(".inpc");
const none = document.querySelector(".nonec");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
    // console.log(e)
  });
  window.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + parseInt(fromTop) + "px";
    console.log(scrollY);
  });
  window.addEventListener("click", () => {
    if (cursor.classList.contains("click")) {
      cursor.classList.remove("click");
      void cursor.offsetWidth; // trigger a DOM reflow
      cursor.classList.add("click");
    } else {
      cursor.classList.add("click");
    }
  });
if(hov) {
    hov.addEventListener("mouseover", () => {
        cursor.src = "./resources/fracital-hov.cur";
    });  
}

if(hov) {
    hov.addEventListener("mouseleave", () => {
        cursor.src = "./resources/fracital-norm.cur";
    });
}

if(inp) {
    inp.addEventListener("mouseover", () => {
        cursor.src = "./resources/fracital-inp.cur";
    }); 
}

if(inp) {
    inp.addEventListener("mouseleave", () => {
        cursor.src = "./resources/fracital-norm.cur";
    });
}

if(none) {
    none.addEventListener("mouseover", () => {
        cursor.src = "./resources/fracital-none.cur";
    });
}

if(none) {
    none.addEventListener("mouseleave", () => {
        cursor.src = "./resources/fracital-norm.cur";
    });
}