const saludos = ['Hola','Welcome','Gruezi'];

export function next(){
    let idx = Math.floor(Math.random()*saludos.length);
    return saludos(idx);
}
export function nthqa (n=0){
    return saludos[n];
}