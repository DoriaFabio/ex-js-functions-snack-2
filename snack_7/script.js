//! Snack 7
//? Crea una funzione che ferma un timer dopo un certo tempo

const message = () => {
    console.log("Sto eseguendo...");
};

function eseguiEferma(prima = () => { }, dopo) {
    prima && prima()
    const interval = setInterval(message, 1000);
    setTimeout(() => {
        clearInterval(interval);
        dopo && dopo();
    }, 5000);
}
eseguiEferma(
    () => console.log("Sto aspettando..."),
    () => console.log("Fine")
);
