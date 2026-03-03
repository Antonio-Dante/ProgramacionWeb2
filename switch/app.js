let opcionUser = prompt(
    `Elija una opcion 
    1: Lunes 
    2: Martes 
    3: Miercoles 
    4: Jueves
    5: Viernes
    6: Sabado
    7: Domingo`
    );

switch (opcionUser){
    case "1":
        console.log("Lunes");
    case "2":
        console.log("Martes");
    case "3":
        console.log("Miercoles");
    case "4":
        console.log("Jueves");
    case "5":
        console.log("Viernes");
    case "6":
        console.log("Sabado");
    case "7":
        console.log("Domingo");
        break;
    default:
        console.log("No valido");
}