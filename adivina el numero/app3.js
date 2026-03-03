const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let vidas = 3;
let gano = false;

alert("Adivina un numero del 1 al 10, tienes 3 intentos");

while (vidas > 0) {
    let intento = parseInt(prompt("Cuál es el número?"));

    if (intento === numeroSecreto) {
        alert("Felicidades Has adivinado el número");
        gano = true;
        break; 
    } else {
        vidas--;
        if (vidas > 0) {
            alert("Incorrecto, te quedan "+ vidas+ " vidas.");
        }
    }
}

if (!gano) {
    alert("El número secreto era el: " + numeroSecreto);
}