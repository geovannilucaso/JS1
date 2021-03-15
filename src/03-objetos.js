const persona ={
    nombre:'Geovanni',
    apellido:'Lucas',
    direccion: {
        ciudad:"CDMX",
        cp:6789,
        lat:13.8787,
        lng:-90.878
    }
};

console.log(persona);
//Copia referencia
const persona2 = persona;
//Copia Objeto
const persona3 = {... persona};
