//! Snack 1
//?Funzione dichiarativa
somma(5, 4); // Hoisting
function somma(num1, num2) {
    const add = num1 + num2;
    console.log("Somma con funzione dichiarativa " + add);
}

//? Funzione anonima
const somma1 = function(num1, num2) {
    const add = num1 + num2;
    console.log("Somma con funzione anonima " + add);
}

somma1(5, 7);

//? Arrow Function
const somma2 = (num1, num2) => {
    const add = num1 + num2;
    console.log("Somma con arrow function " + add);
}

somma2(4, 3);

//! Snack 2
//? Arrow Function che calcola il quadrato di un numero
const quadrato = num1 => num1 ** 2;

console.log("Il quadrato del numero è", quadrato(5));

//! Snack 3
//? Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
//? La funzione deve eseguire l'operazione fornita sui due numeri.

const somma3 = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log("La somma tra a e b è:", eseguiOperazione(3, 5, somma3));
console.log("La moltiplicazione tra a e b è:", eseguiOperazione(3, 5, moltiplica));
