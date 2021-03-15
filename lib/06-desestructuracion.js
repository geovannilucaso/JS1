"use strict";

var persona = {
    nombre: "Geovanni",
    apellido: "Lucas",
    clave: 1234
};

//desestructurar

var nombre = persona.nombre;


console.log(nombre);

//de lo contrario
console.log();

var getNombre = function getNombre(_ref) {
    var nombre = _ref.nombre;
    console.log("Hola " + nombre);
};

getNombre(persona);