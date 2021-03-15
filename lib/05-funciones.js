'use strict';

function saludo(nombre) {
    return 'Hola ' + nombre;
}
//FOrma recomendada ... (ni tanto...)
var saludar = function saludo2(nombre) {
    return 'Hola ' + nombre;
};
//Muy bien !!! (pero...)
var saludar3 = function saludar3(nombre) {
    return 'Hola ' + nombre;
};
//Aplica si dentro de la función hay una instrucción
var saludar4 = function saludar4(nombre) {
    return 'Hola ' + nombre;
};

var getUsuarioActivo = function getUsuarioActivo(nombre) {
    return { uid: 'ABC456', username: nombre };
};

console.log(getUsuarioActivo('Geovanni'));