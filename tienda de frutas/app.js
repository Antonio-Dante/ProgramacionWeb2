let carrito = [];

if (confirm("¿Quieres añadir una Manzana al carrito?")) {
    carrito.push("Manzana");
}

if (confirm("¿Quieres añadir una Pera al carrito?")) {
    carrito.push("Pera");
}

if (confirm("¿Quieres añadir un Plátano al carrito?")) {
    carrito.push("Plátano");
}

if (confirm("¿Quieres añadir una Naranja al carrito?")) {
    carrito.push("Naranja");
}

if (confirm("¿Quieres añadir unas Uvas al carrito?")) {
    carrito.push("Uvas");
}

if (carrito.length > 0) {
    alert("Tu carrito tiene las siguientes frutas:\n- " + carrito.join("\n- "));
} else {
    alert("No añadiste ninguna fruta. Tu carrito está vacío.");
}