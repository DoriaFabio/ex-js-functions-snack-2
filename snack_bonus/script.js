//! Snack 8
//? Crea una funzione che simula un conto alla rovescia

// function contoAllaRovescia(n) {
//     let contatore = n;
//     return function decrementa() {
//         if (contatore > 0) {
//             console.log(contatore);
//             contatore--;
//         } else {
//             console.log("Tempo scaduto");
//             clearInterval(interval);
//         }
//     };
// }
// const contatore = contoAllaRovescia(5);
// const interval = setInterval(contatore, 1000);

//! Snack 9
//? Creare una funzione che esegue una sequenza di operazioni con ritardi

// function sequenzaOperazioni(operazioni, intervallo) {
//     operazioni.forEach((op, index) => {
//         setTimeout(() => {
//             op();
//         }, intervallo * index);
//     });
// }
// sequenzaOperazioni([
//     () => console.log("Operazione 1"),
//     () => console.log("Operazione 2"),
//     () => console.log("Operazione 3")
// ], 2000);

//! Snack 10
//? Creare un throttler per limitare l'esecuzione di una funzione

function creaThrottler (callback, limite) {
    let ultimaEsecuzione = 0;
    return function(...args){
        const ora = Date.now(); 
        if(ora - ultimaEsecuzione >= limite) {
            console.log(ora);
            ultimaEsecuzione = ora;
            callback(...args);
        } else {
            console.log("Non posso eseguire l'operazione");
        }
    }
}

const throttledLog = creaThrottler(() => console.log("Eseguito"), 2000);

throttledLog();
throttledLog();
setTimeout(throttledLog, 2500);