"use strict";

var arreglo = [1, 2, 3, 4];

var arreglo2 = [].concat(arreglo);

var arreglo3 = [].concat(arreglo, [5]);

var arreglo4 = arreglo3.map(function (x) {
    return x * 2;
});