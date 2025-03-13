# ex-js-functions-snack-2
# Funzioni in JavaScript
function esempio(prima = () => { }, dopo) {
    prima && prima()
    setTimeout(() => {
        console.log("Sono passati 1000ms");
        dopo && dopo();
    }, 1000);
}
esempio(
    () => console.log("Sto per aspettare"),
    () => console.log("Fine")
);

# Funzione che ritorna una funzione
# createGreeter ritorna una funzione che saluta la persona passata come argomento
function createGreeter(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    }
}
const sayHello = createGreeter("Hello");
const sayGoodbye = createGreeter("Goodbye");
sayHello("John");
sayGoodbye("John");

# createMultiplier ritorna una funzione che moltiplica il numero passato come argomento per il moltiplicatore passato alla funzione createMultiplier
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));
console.log(triple(5));