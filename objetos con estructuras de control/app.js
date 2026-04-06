function generarListas() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    // Limpiar contenido anterior
    resultado.innerHTML = "";

    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        resultado.innerHTML = "<p>Por favor ingresa un número válido.</p>";
        return;
    }

    // Generar listas
    for (let i = 1; i <= numero; i++) {
        let lista = document.createElement("ul");
        let titulo = document.createElement("h3");

        titulo.textContent = "Lista " + i;
        resultado.appendChild(titulo);

        for (let j = 1; j <= i; j++) {
            let item = document.createElement("li");
            item.textContent = "Elemento " + j;
            lista.appendChild(item);
        }

        resultado.appendChild(lista);
    }
}