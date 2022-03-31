/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */
const lista = [
    "Pippo",
    "Franchino",
    "Andrea",
    "Fabio",
    "Mattia",
    "Asia"
]
let presente = false;
let index = 0;

document.getElementById("btn").addEventListener("click", validation);

function validation(){
    presente = false;
    index = 0;
 const userName = document.getElementById("nome").value;
 while(presente === false && index < lista.length){
     if(userName === lista[index]){
        let userIngresso = document.getElementById("ingresso").innerHTML = "Ingresso Consentito";
        presente = true;
     } else{
            index++;
            let userIngresso = document.getElementById("ingresso").innerHTML = "Ingresso non consentito";
            }
 }
}


