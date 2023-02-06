
// funciones anonimas para protejer los datos

// (function(){

//     let a = 10;
//     console.log(a)

//     a = function(){
//         a = 20;
//         return a;
//     }();

//     console.log(a);


// })();

// function ejecutarFuncion(fn){

//     if ( fn() === 1 ){
//         return true
//     }else{
//         return false
//     }
// };

// console.log(

//     ejecutarFuncion(function(){
//         console.log('Funcion Anonima ejecutada');
//         return 1;
//     })

// );


function identifica( parametro ){

    console.log( typeof parametro )
    console.log( parametro instanceof Persona )

}

function Persona(){
    this.nombre = 'reymond',
    this.apellido = 'caceres', 
    this.edad = 33
}

let nombreCompleto = new Persona();
console.log(nombreCompleto);


identifica(nombreCompleto);

