'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.next = next;
exports.nthqa = nthqa;
var saludos = ['Hola', 'Welcome', 'Gruezi'];

function next() {
    var idx = Math.floor(Math.random() * saludos.length);
    return saludos(idx);
}
function nthqa() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return saludos[n];
}