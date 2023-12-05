const readlineSync = require("readline-sync");
const {generarNumeroAleatorio, verificarAdivinanza} = require("./adivinanza.js");

const obtenerNumeroUsuario = () => {
    return readlineSync.question("Ingresa el numero: ");
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log("Bienvenido al juego de adivinanzas!")
    console.log("Intenta ingresar un numero entre 0 y 100.\n")

    while (numeroAdivinado != numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroAdivinado, numeroSecreto);
    }
};

juegoAdivinanza();