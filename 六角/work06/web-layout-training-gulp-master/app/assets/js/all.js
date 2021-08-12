let buycar = document.getElementsByClassName("buycar")[0];
buycar.style = "display:none";
let buycarEvent = () => {
    if(buycar.style.display == "none") {
        buycar.style = "display:show";
    } else {
        buycar.style = "display:none";
    }
}

