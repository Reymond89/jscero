
// let a = 30;

// function primeraFuncion(){
//     var a = 2;
//     console.log(a);
// }
// primeraFuncion();


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


// function persona(nombre, apellido){

// return {
//     nombre: nombre,
//     apellido: apellido

// }

// }

// let crearPersona = persona('Jose', 'caceres');

// console.log(crearPersona);

// function crearFuncion() {
    
//     return function(){
//         console.log('me crearon!!')
//     }
// }
// let nuevaFuncion = crearFuncion();
// nuevaFuncion();


// function a() {
//     console.log('funcion nueva')

   
// }
// a.nombre = 'maria';
// a.apellido = 'caceres'

// a.direccion ={
//     pais: 'venezuela',
//     edificio:{
//         piso: '8vo',
//         nombre: 'edifico principal'
//     }
// }

// let persona = {
    
//     nombre: 'reymond',
//     apellido: 'caceres',

   

//     imprimirNombre: function(){
//         console.log('nombre completo');
//         },
//     direccion:{
//         pais: 'venezuela',
//         obtenerPais:function () {
            
//             let self = this;
           

//             let nuevaDireccion = function(){
//                 console.log(self)
//                 console.log('la direccion es ' + self.pais );
//             }
//             nuevaDireccion();
//         }
//     }
// }
// persona.direccion.obtenerPais();

// console.log(persona.nombre + ' ' + persona.apellido);

function Persona(nombre, apellido, edad){
    
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido + this.edad;
    }
    
}

let juan = new Persona('Arturo','Pacheco ', 30);
console.log(juan.edad);



