let toggleNavStatus = false;
let menu = document.querySelector(".menu")
const menuHamburger = document.querySelector("#icon-menu");

menuHamburger.addEventListener("click", function() {
  let getUl = document.querySelector(".menu ul");
  let getLi = document.querySelectorAll(".menu li");

  if (toggleNavStatus === false) {
    getUl.style.visibility = "visible";

    let arrayLength = getLi.length;
    for (let i = 0; i < arrayLength; i++) {
      getLi[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } 
  
  else if (toggleNavStatus == true) {
    getUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
});

let bgrColor = document.querySelector(".main-background");
let greybg = document.querySelector(".grey");
let redbg = document.querySelector(".red");
let orangebg = document.querySelector(".orange");
let purplebg = document.querySelector(".purple");
let greenbg = document.querySelector(".green");

greybg.addEventListener("click", function () {
  bgrColor.style.background = "#f1f1f1";
});

redbg.addEventListener("click", function () {
  bgrColor.style.background = "red";
});

orangebg.addEventListener("click", function () {
  bgrColor.style.background = "orange";
});

purplebg.addEventListener("click", function () {
  bgrColor.style.background = "purple";
});

greenbg.addEventListener("click", function () {
  bgrColor.style.background = "green";
});
