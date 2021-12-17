var btnEntrar = document.querySelector("#signin");
var btnIncreva = document.querySelector("#signup");

var body = document.querySelector("body");


btnEntrar.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnIncreva.addEventListener("click", function () {
    body.className = "sign-up-js";
})