/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */
let arrayNum = [];
let userNum = [];
let index = 0;
let maxnum = 5;
let fine = false;

document.getElementById("btn").addEventListener("click", dispari);

function dispari(){
    let userNum1 = document.getElementById("num1").value;
    userNum.push(userNum1);
    let userNum2 = document.getElementById("num2").value;
    userNum.push(userNum2);
    let userNum3 = document.getElementById("num3").value;
    userNum.push(userNum3);
    let userNum4 = document.getElementById("num4").value;
    userNum.push(userNum4);
    let userNum5 = document.getElementById("num5").value;
    userNum.push(userNum5);
    let userNum6 = document.getElementById("num6").value;
    userNum.push(userNum6);
    let output = document.getElementById("out");
    console.log(userNum)
    while(fine === false && index < userNum.length){
        console.log(index)
        if(userNum[index] %2 === 1 ){
            console.log(userNum[index])
            arrayNum.push(userNum[index])
            console.log(arrayNum)
            index++;
        } else{
            console.log("pari")
            index++;
        }

    }
    output.innerHTML = `
    ${arrayNum}
`;
}