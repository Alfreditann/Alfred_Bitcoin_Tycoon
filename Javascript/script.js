
let antallBitcoin = 0
let bitcoinEarn = 1
let minusBitcoin = 10

function updateUI(){
    document.getElementById("viserAntallBitcoin").innerText = antallBitcoin;
}

function merBitcoin() {
    if (antallBitcoin >= minusBitcoin) {
        antallBitcoin -= minusBitcoin;
        minusBitcoin *= 2;
        bitcoinEarn = bitcoinEarn + 1;
        updateUI();
    }
    else {
        bitcoinEarn = bitcoinEarn;
        updateUI();
    }
}
function counter() {
        antallBitcoin += bitcoinEarn
        updateUI();
        
    }
        
function telefonEarnings() {
}


updateUI();