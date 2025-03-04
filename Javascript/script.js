
let antallBitcoin = 0
let bitcoinEarn = 1
let minusKroner = 10
let antallKroner = 0
let antallStrøm = 0
let hasBougthTelefon = false;
let hasBougthIpad = false;
let hasBougthLaptop = false;
let hasBougthPC = false;
let hasBougthNasa = false;

function updateUI() {
    document.getElementById("viserAntallBitcoin").innerText = antallBitcoin;
    document.getElementById("viserAntallKroner").innerText = antallKroner
    document.getElementById("viserAntallStrøm").innerText = antallStrøm

     while(hasBougthTelefon == true && antallStrøm >=1) {
    
        setInterval(autoBitcoin, 1000)
        updateUI();
    }
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
    if (antallBitcoin >= antallBitcoin) {
        antallKroner += antallBitcoin * 1;
        antallBitcoin = 0;
        updateUI();
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
function autoBitcoin() {
    if (!hasBougthTelefon && antallKroner >= 10){
        antallKroner -=10;
        hasBougthTelefon = true;
        document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 1;
        updateUI();
    }
console.log("sdffs")
   

}

// if (!hasBougthTelefon && antallKroner >= 10) {
//     antallKroner -= 10;
//     hasBougthTelefon = true;
//     setInterval(autoBitcoin, 1000);
//     updateUI();
//     if (antallStrøm >= 1) {
//             document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 1;
//             antallStrøm = antallStrøm -1;
//             updateUI();
//     }
// }
function ipadEarning() {
    if (hasBougthIpad && antallKroner >= 100) {
        setInterval(autoBitcoin, 500);
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 1;
        }
        antallKroner -= 100;
        hasBougthIpad = true;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}
function laptopEarning() {
    if (hasBougthLaptop && antallKroner >= 5000) {
        setInterval(autoBitcoin, 1000
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 500;
        }
        antallKroner -= 5000;
        hasBougthLaptop = true
        updateUI();
    }
    else {
    }
}
function pcEarning() {
    if (hasBougthPC && antallKroner >= 50000) {
        setInterval(autoBitcoin, 1000
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 5000;
        }
        antallKroner -= 50000;
        hasBougthPC = true;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}
function nasaEarning() {
    if (hasBougthNasa && antallKroner >= 5000000) {
        setInterval(autoBitcoin, 1000
        );
        function autoBitcoin() {
            document.getElementById("viserAntallBitcoin").innerHTML = antallBitcoin = antallBitcoin + 500000;
        }
        antallKroner -= 5000000;
        hasBougthLaptop = true;
        updateUI();
    }
    else {
        alert("get your money up lil bro")
    }
}
function bGenerator() {
    if (antallKroner >= 10) {
        antallStrøm = antallStrøm + 10
        antallKroner = antallKroner - 10;
        updateUI()   
    }
}
updateUI();