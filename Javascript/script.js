
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
function selleTiBitcoin() {
    if (antallBitcoin >= 10) {
        antallBitcoin = antallBitcoin - 10;
        antallKroner = antallKroner + 10;
        updateUI();
    }
    else {
        alert("du har ikke bitcoin å selge")
    }
}
function selleTiKBitcoin() {
    if (antallBitcoin >= 10000) {
        antallBitcoin = antallBitcoin - 10000;
        antallKroner = antallKroner + 10000;
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
function ipadEarning() {
    if (antallKroner >= 100) {
        setInterval(autoBitcoin, 500
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 1;
        }
        antallKroner -= 100;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}
function laptopEarning() {
    if (antallKroner >= 5000) {
        setInterval(autoBitcoin, 1000
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 500;
        }
        antallKroner -= 5000;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}
function pcEarning() {
    if (antallKroner >= 50000) {
        setInterval(autoBitcoin, 1000
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 5000;
        }
        antallKroner -= 50000;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}
function nasaEarning() {
    if (antallKroner >= 5000000) {
        setInterval(autoBitcoin, 1000
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 500000;
        }
        antallKroner -= 5000000;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}

updateUI();