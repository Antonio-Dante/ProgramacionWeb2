document.getElementById("CalculadoraForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const numero1 = parseFloat(document.getElementById("num1").value);
    const numero2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;

    try {
        const response = await fetch("/calcular", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ numero1, numero2, operacion })
        });

        const data = await response.json();

        document.getElementById("resultado").textContent =
            `Resultado: ${data.resultado}`;

    } catch (error) {
        document.getElementById("resultado").textContent =
            "Error al conectar con el servidor";
    }
});