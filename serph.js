//Manipulando variables
const containerqr = document.querySelector(".containerqr")
const textinput = document.getElementById("textinput");
const BSubmit = document.getElementById("Submit");
const BDownload = document.getElementById("Download");
const sizeqr = document.querySelector(".sizeqr")
//
const BGColor = document.getElementById("BGColor");
const FGColor = document.getElementById("FGColor");

let QRgenerator;
let SizeOption, BGcolorSelect, FGColorSelect;

//Listeners
sizeqr.addEventListener("", () => {
    SizeOption = sizeqr.value;
})

BGColor.addEventListener("input", () => {
    BGcolorSelect = BGColor.value;
})
FGColor.addEventListener("input", () => {
    FGColorSelect = FGColor.value;
})

function hola(params) {
    console.log('Connect js.');
}

hola();

//
window.onload = () => {
    containerqr.innerHTML = "";
    SizeOption = 100;
    sizeqr.value = 100;
    BGColor.value = BGcolorSelect = "#FFFFFF";
    FGColor.value = FGColorSelect = "#000000";
    textinput.value = "";
    BDownload.classList.add("")
    BSubmit.disable = true;
}