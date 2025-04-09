//! Snack 6
//? Crea un contatore automatico con setInterval

function creaContatoreAutomatico() {
    let contatore = 0;
    return function incrementa() {
        contatore++;
        console.log(contatore);
    };
}

const contatore = creaContatoreAutomatico();
const interval = setInterval(contatore, 1000);
setTimeout(() => {
    clearInterval(interval);
    console.log("Fine");
}, 10500);