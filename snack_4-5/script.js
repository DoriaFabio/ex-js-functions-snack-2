//! Snack 4
//? Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(prima = () => { }) {
    prima && prima()
    return (
        setTimeout(() => {
            console.log("Tempo scaduto");
        }, 3000)
    );
}
creaTimer(
    () => console.log("Timer in esecuzione")
);

//! Snack 5
//? Crea una funzione stampaOgniSecondo con setInterval

function message() {
    console.log("Questo è un messaggio che viene stampato ogni secondo");
}
setTimeout(() => {
    const interval = setInterval(message, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log("Fine");
    }, 7000);
}, 4000);


