const persona = {
    nombre:"Geovanni",
    apellido:"Lucas",
    clave:1234,
    direccion:{
        cp:9877,
        calle:"Calle 3"
    }
};

const {cp} = persona.direccion;
//const {cp.direccion:cp} = persona;
//desestructurar

const {nombre} = persona;

console.log(nombre);

//de lo contrario
console.log();

const getNombre = ({nombre})=>{console.log(`Hola ${nombre}`)};


getNombre(persona);