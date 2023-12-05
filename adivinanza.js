const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100 + 1);
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado == numeroSecreto) {
        console.log("¡Felicitaciones, has adivinado el numero secreto!");
    }
    else if(numeroAdivinado > numeroSecreto) {
        console.log("El numero que adivinaste es MENOR al numero secreto. ¡Sigue intentando!");
    } 
    else {
        console.log("El numero que adivinaste es MAYOR al numero secreto. ¡Sigue intentando!");
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};
