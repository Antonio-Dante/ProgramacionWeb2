const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Ruta para calcular
app.post("/calcular", (req, res) => {
    const { numero1, numero2, operacion } = req.body;
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                return res.json({ resultado: "Error: División por cero" });
            }
            break;
        default:
            return res.json({ resultado: "Operación no válida" });
    }

    res.json({ resultado });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});