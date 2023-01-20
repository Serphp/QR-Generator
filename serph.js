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

const inputFormatter = (value) => {
    let newValue = '';
    for (let i = 0; i < value.length; i++) {
        if (/[a-zA-Z0-9]/.test(value[i])) {
            newValue += value[i];
        }
    }
    return newValue;
};

sButton.addEventListener("click", async () => {
showqr.innerHTML = "";
//QR code generation
Serphp_QR = await new QRCode(showqr, {
    text: uInput.value,
    width: rSelect,
    height: rSelect,
    colorDark: FGColorChoice,
    colorLight: BGColorChoice,
});

//create image for download
const png = showqr.firstChild.toDataURL("image/png");
dButton.href = png;

let userValue = uInput.value;
try {
    userValue = new URL(userValue).hostname;
} catch (_) {
    //none
}
userValue = inputFormatter(userValue);
dButton.download = `${userValue}QR`;
dButton.classList.remove("hide");
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