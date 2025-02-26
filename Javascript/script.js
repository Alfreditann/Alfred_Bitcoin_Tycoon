
let antallBitcoin = 0
let bitcoinEarn = 1

function updateUI(){
    document.getElementById("viserAntallBitcoin").innerText = antallBitcoin;
}

function counterPluss() {
    counter
    console.log("hei")
}
function merBitcoin() {
    bitcoinEarn = bitcoinEarn + 1;
}
function counter() {
        antallBitcoin += bitcoinEarn
        updateUI();
        
    }
        



updateUI();