
let antallBitcoin = 0
let bitcoinEarn = 1
let minusKroner = 10
let antallKroner = 0

function updateUI() {
    document.getElementById("viserAntallBitcoin").innerText = antallBitcoin;
    document.getElementById("viserAntallKroner").innerText = antallKroner
}


function merBitcoin() {
    if (antallKroner >= minusKroner) {
        antallKroner -= minusKroner;
        minusBitcoin *= 2;
        bitcoinEarn = bitcoinEarn + 1;
        updateUI();
    }
    else {
        bitcoinEarn = bitcoinEarn;
        updateUI();
        alert("Du er fattig 😂😂😂😂")
    }
}
function counter() {
    antallBitcoin += bitcoinEarn
    updateUI();

}

function selleBitcoin() {
    if (antallBitcoin >= 1) {
        antallBitcoin = antallBitcoin - 1;
        antallKroner = antallKroner + 1;
        updateUI();
    }
    else {
        alert("du har ikke bitcoin å selge")
    }
}
function telefonEarning() {
    if (antallKroner >= 10) {
        setInterval(autoBitcoin, 1000
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 1;
        }
        antallKroner -= 10;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}

updateUI();