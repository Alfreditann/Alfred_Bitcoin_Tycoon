
let antallBitcoin = 0
let level2 = false;

function updateUI(){
    document.getElementById("viserAntallBitcoin").innerText = antallBitcoin;
}

function counterPluss() {
    counter
    console.log("hei")
}

function counter() {
    if(level2 == true){
        antallBitcoin+= 2 ;
        updateUI();
        console.log("hei level 2")
    }
    else{
        antallBitcoin++ ;
        updateUI();
        console.log("hei")
    }
}


updateUI();