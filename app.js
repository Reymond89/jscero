
let a = 30;

function primeraFuncion(){
    var a = 2;
    console.log(a);
}
primeraFuncion();


// function nombreCompleto(nombre, apellido){

//     // if(apellido === undefined){
//     //     apellido = 'xxx'
//     // }
//     apellido = apellido || 'xxx';

//     console.log(nombre +" "+ apellido);
// }

// nombreCompleto('reymond', 'caceres')

// function imprimir ( fn ){

//     // console.log(persona.nombre + ' ' + persona.apellido);

//     fn();
// }

// let persona={
//     nombre: 'Juan',
//     apellido: 'Caceres'
// }

// let miFuncion = function(){
//     console.log('mi Funcion')
// }

// imprimir(miFuncion);


function persona(nombre, apellido){

return {
    nombre: nombre,
    apellido: apellido

}

}

let crearPersona = persona('Jose', 'caceres');

console.log(crearPersona);

function crearFuncion() {
    
    return function(){
        console.log('me crearon!!')
    }
}
let nuevaFuncion = crearFuncion();
nuevaFuncion();