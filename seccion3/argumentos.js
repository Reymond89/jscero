
let argumentos = 10;

function miFuncion(a, b, c, d) {

    if( arguments.length !== 4 ){
        console.error('Debes introducir 4 parametros');
        return;
    }

    console.log( a + b + c + d);
    

   
}
// miFuncion(2, 3, 4, 4);


function crearProducto(nombre, precio) {

    nombre = nombre ? nombre : 'sin nombre',
    precio = precio ? precio : 0

    console.log(`Producto : ${nombre}, precio: ${precio}`);
    
}
// crearProducto();

function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}
// crearProducto100('camisa');

function crearProductoCamisa(precio) {
    crearProducto('camisa nueva', 75)
}
// crearProductoCamisa()

// POLIMORFISMO JS

function determinarDato(a) {

    if(a === undefined){
        console.log('A es undefined, no se que hacer!!!')
        return;
    }
    // // console.log(a)
    if ( typeof a === 'number' ){
        console.log('A es un dato tipo numero, puedes hacer operaciones')
    }
    if (typeof a === 'string'){
        console.log('A es un dato tipo texto')
    }
    if (typeof a === 'object'){
        console.log('A es un objeto, pero puede ser cualquier cosa')

        if( a instanceof Number){
            console.log('A es un objeto, tipo numerico');
        }
    }
    if (typeof a === 'function'){
        console.log('A es una funcion');

        
    }
}

// let b = new Number(3);
// console.log(b)

// determinarDato(b);

// funcion anonima 


function crearFunciones() {
    
    let arr = []

    let numero = 1;

    (function(numero){
    
        arr.push(function(){
            console.log(numero)
        });
    
    })(numero)
   
    numero = 2;

    (function(numero){
          
    arr.push(function(){
        console.log(numero)
    })

    })(numero)

  
    numero = 3;

    (function(numero){
        arr.push(function(){
            console.log(numero)
        })
    })(numero)

    return arr;
}

let funciones = crearFunciones();

// funciones[0]();
// funciones[1]();
// funciones[2]();
// funciones[3]();

// video 28 objeto number

// let a = 10.456789;

// let b = new Number('20');
// console.log(typeof b, b)
// console.log(a.toFixed(3)); // toFixed cantidad de decimales en este caso 3.
// console.log(a.toPrecision(2)) // cuenta desde el 10 1,2 : decimales
// console.log(b.valueOf()); // '20' convierte en 20, su valor numerico de string a number


// objeto booleano

// let a = new Boolean(0)

// console.log(a.valueOf())

let b = 'reymond';

let a = new String('rey')

console.log(a.toUpperCase())
console.log(a.toLowerCase())

let i = a.indexOf('y'); // posicion de la letra y
console.log(`la letra se encuentra en la posicion ${i}`)

let c = new String('Fernando') // segunda posicion de la letra n
console.log(c.lastIndexOf('n'))

let d = new String('reymond caceres') // bloque de texto donde inicia y cuanta el espacio vacio.
console.log(d.indexOf('caceres'))

let e = new String('juan carlos')
let nombre = e.substring(0, 2); // inicio index y el fin segundo parametro
console.log(nombre)

let g = 'Daniela jimenez perez vivas';
let resultado = g.split(' '); // separar textos por espacios
console.log(resultado)
console.log(resultado.length)

document.write(g.italics());
