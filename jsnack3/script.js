/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */
let index = 0;
let sommaNum = 0;

document.getElementById("btn").addEventListener("click", somma);

function somma(){
    let arrayNum = document.getElementById("num").value;
    let arrayNum1 = arrayNum.split("");
    console.log(arrayNum1)
    while(index < arrayNum.length){
        sommaNum += parseInt(arrayNum[index]) ;
        console.log(sommaNum)
        index++;
    }
    let out = document.getElementById("output").innerHTML = `
       la somma è: ${sommaNum};
    `

}