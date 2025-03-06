
let antallBitcoin = 0
let bitcoinEarn = 1
let minusKroner = 10
let antallKroner = 0
let antallStrom = 0
let hasBougthTelefon = false;
let hasBougthIpad = false;
let hasBougthLaptop = false;
let hasBougthPC = false;
let hasBougthNasa = false;

//optaterer hvor mye strøm, penger og bitcoin du har
function updateUI() {
    document.getElementById("viserAntallBitcoin").innerText = antallBitcoin;
    document.getElementById("viserAntallKroner").innerText = antallKroner
    document.getElementById("viserAntallStrøm").innerText = antallStrom
}

//når du trykker på knappen øker bitcoin med 1
function counter() {
    antallBitcoin += bitcoinEarn
    updateUI();

}
//funsjonen selger bitcoin når du trykker på knappen
function selleBitcoin() {
    if (antallBitcoin >= antallBitcoin) {
        antallKroner += antallBitcoin * 1;
        antallBitcoin = 0;
        updateUI();
    }
}
//når du trykker på knappen så aktiverer den autobitcoin, sånn at du får bitcoin hvert sekund
function autoBitcoin() {
    if (!hasBougthTelefon && antallKroner >= 10) {
        setInterval(foTelefonBitcoin, 1000);
        antallKroner -= 10;
        hasBougthTelefon = true;
        updateUI();
    }
   

}
//den sier hvor mye bitcoin og penger autobitcoin skal plusse/minuse
function foTelefonBitcoin() {
    if(antallStrom >= 1) {
        antallBitcoin = antallBitcoin + 2;
        antallStrom = antallStrom - 1;
        updateUI();
    }
}

function ipadEarning() {
    if (!hasBougthIpad && antallKroner >= 100) {
        setInterval(foIpadBitcoin, 500);
        antallKroner -= 100;
        hasBougthIpad = true;
        updateUI();
    }
}
function foIpadBitcoin() {
    if(antallStrom >= 2) {
        antallBitcoin = antallBitcoin + 4;
        antallStrom = antallStrom - 2;
        updateUI();
    }
}
function laptopEarning() {
    if (!hasBougthLaptop && antallKroner >= 5000) {
        setInterval(foLaptopBitcoin, 5000);
        antallKroner -= 5000;
        hasBougthLaptop = true;
        updateUI();
    }
}
function foLaptopBitcoin() {
    if(antallStrom >= 1000) {
        antallBitcoin = antallBitcoin + 2000;
        antallStrom = antallStrom - 1000;
        updateUI();
    }
}
function pcEarning() {
    if (!hasBougthPC && antallKroner >= 50000) {
        setInterval(foPCBitcoin, 1000);
        antallKroner -= 50000;
        hasBougthPC = true;
        updateUI();
    }
}
function foPCBitcoin() {
    if(antallStrom >= 10000) {
        antallBitcoin = antallBitcoin + 20000;
        antallStrom = antallStrom - 10000;
        updateUI();
    }
}

function nasaEarning() {
    if (!hasBougthNasa && antallKroner >= 500000) {
        setInterval(foNASABitcoin, 100);
        antallKroner -= 500000;
        hasBougthPC = true;
        updateUI();
    }
}
function foNASABitcoin() {
    if(antallStrom >= 100000) {
        antallBitcoin = antallBitcoin + 200000;
        antallStrom = antallStrom - 100000;
        updateUI();
    }
}
//når du trykker på knappen så gir den deg strøm som brukes til automatiske maskiner
function bGenerator() {
    if (antallKroner >= 10) {
        antallStrom = antallStrom + 10
        antallKroner = antallKroner - 10;
        updateUI()   
    }
}
function aGenerator() {
    if (antallKroner >= 100) {
        antallStrom = antallStrom + 200
        antallKroner = antallKroner - 100;
        updateUI()   
    }
}
function Vindmolle() {
    if (antallKroner >= 10000) {
        antallStrom = antallStrom + 5000;
        antallKroner = antallKroner - 10000;
        updateUI()   
    }
}
function Powerplant() {
    if (antallKroner >= 100000) {
        antallStrom = antallStrom + 50000;
        antallKroner = antallKroner - 100000;
        updateUI()   
    }
}
function Sun() {
    if (antallKroner >= 1000000) {
        antallStrom = antallStrom + 500000;
        antallKroner = antallKroner - 1000000;
        updateUI()   
    }
}
updateUI();