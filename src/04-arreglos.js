const arreglo = [1,2,3,4];

let arreglo2 = [... arreglo];

let arreglo3 = [... arreglo,5];

let arreglo4 = arreglo3.map(
    function(x) {
        return x*2;
})