var miCarro = new Object();
miCarro.marca="ford";
miCarro.modelo="Ikon fiesta";
miCarro.anio="2013";
console.log(miCarro);

var miCarro={
    marca:"ford",
    modelo: "ikon Fiesta",
    anio: "2013"
};

console.log(miCarro);

const alumno={
    nombre:"Antonio",
    primerApellido:"Martinez",
    segundoApellido:"Santiago",
    numeroContacto:[5541399687, 5558466370],
    direccion:{
        calle:`Flores`,
        numero:"s/n",
        lote: `s/n`,
        colonia:`Valle`,
        cp:14500,
        ciudad:`CDMX`,
        pais: `Mexico`
    },
    educacion:{
        kinder:{
            nombre:`no me acuerdo`,
            publica: true,

            hacerPipi:function(){
                console.log(`Maeta me mie`)
            }
        },
        primaria:{
            nombre:`salvador trejo escobedo`,
            publica: true,
            tiempoRecreo:`30 min`,
            jugar: function(tipoJuego){
                console.log("jugando " + tipoJuego);
            }
        },
        secundaria:{
            nombre:`284`,
            publica: true,
            serRebelde: function(accion){
                console.log("Me sonaron por hacer " + accion);
            }
        }
    },

    actividadesPersonales: {
        lectura:"Ninguno",
        fisica:"gimnasio",
        actividadCotidiana (actividad){
            return `Antonio hace la actividad de ${this.fisica}`;
        }
    }
};
// Crear
alumno.numeroCuenta=321044862;

// Leer
console.log(alumno);
console.log(alumno[`nombre`]);
console.log(alumno.numeroContacto);

// Actualizar
alumno.nombre=`Antonio`;
console.log(alumno[`nombre`]);

//Eliminar
delete alumno.segundoApellido;

console.log(alumno.hasOwnProperty(`nombre`))
console.log(alumno.educacion.kinder.hacerPipi());
console.log(alumno.educacion.primaria.jugar("Futbol"));
console.log(alumno.educacion.secundaria.serRebelde("salirme del salon"));
console.log(alumno.actividadesPersonales.actividadCotidiana());