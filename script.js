//! Snack 1
//?Funzione dichiarativa
function somma(num1, num2) {
    const add = num1 + num2;
    console.log(add);
}

somma(5, 4);

//? Funzione anonima
const somma1 = function(num1, num2) {
    const add = num1 + num2;
    console.log(add);
}

somma1(5, 7);

//? Arrow Function
const somma2 = (num1, num2) => {
    const add = num1 + num2;
    console.log(add);
}

somma2(4, 3);

//! Snack 2
//? Arrow Function che calcola il quadrato di un numero
const quadrato = num1 => num1*num1;

console.log(quadrato(5));

//! Snack 3
//? Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma3 = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 5, somma3));
console.log(eseguiOperazione(3, 5, moltiplica));

//! Snack 4
//? Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(prima = () => { }) {
    prima && prima()
    setTimeout(() => {
        console.log("Tempo scaduto");
    }, 5000);
}
creaTimer(
    () => console.log("Timer in esecuzione")
);

//! Snack 5
//? Crea una funzione stampaOgniSecondo con setInterval

