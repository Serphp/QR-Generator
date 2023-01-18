const showqr = document.querySelector(".showqr");
const uInput = document.getElementById("uInput");
const sButton = document.getElementById("submit");
const dButton = document.getElementById("download");
const rOptions = document.querySelector(".rOptions");
const ColorB = document.getElementById("ColorB");
const FColor = document.getElementById("FColor");

let Serphp_QR;
let rSelect, BGColorChoice, FGColorChoice;

//set size
rOptions.addEventListener("change", () => {
    rSelect = rOptions.value;
});
//set background color
ColorB.addEventListener("input", () => {
    BGColorChoice = ColorB.value;
});
//set foreground color
FColor.addEventListener("input", () => {
    FGColorChoice = FColor.value;
});

//Enable & disable button for generate QRCode
uInput.addEventListener("input", () => {
    sButton.disabled = uInput.value.trim().length < 1 ? true : false;
    dButton.href = uInput.value.trim().length < 1 ? "" : dButton.href;
    dButton.classList.toggle("hide", uInput.value.trim().length < 1);
});


window.onload = () => {
    showqr.innerHTML = "";
    rSelect = 100;
    rOptions.value = 100;
    uInput.value = "";
    ColorB.value = BGColorChoice = "#FFFFFF";
    FColor.value = FGColorChoice = "#000000";
    dButton.classList.add("hide");
    sButton.disabled = true;
};