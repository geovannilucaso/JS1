function saludo(nombre){
    return `Hola ${nombre}`;
}
//FOrma recomendada ... (ni tanto...)
const saludar = function saludo2(nombre){
    return `Hola ${nombre}`;     
};
//Muy bien !!! (pero...)
 const saludar3 = (nombre) => {
    return `Hola ${nombre}`; 
};
//Aplica si dentro de la función hay una instrucción
const saludar4 = (nombre)=>`Hola ${nombre}`;

const getUsuarioActivo = (nombre)=>({uid:'ABC456',username:nombre});

console.log(getUsuarioActivo('Geovanni'));