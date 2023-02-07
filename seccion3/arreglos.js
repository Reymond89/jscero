

let arr = [5, 4, 3, 2, 1];
// console.log(arr)
// console.log(arr[0], arr[3])

arr.reverse(); // revierte la lista del array
console.log(arr)

// arr = arr.map(function(elem){
//     elem *= 2;
//     return elem;
// });
// console.log(arr)

arr = arr.map(function(elem){ // pasar un parametro 
    elem *= elem;
    return elem;
});


console.log(arr)

arr = arr.map( Math.sqrt ) // math.sqrt raiz cuadrada 
console.log(arr)

arr = arr.join('|') // agrega lo q pasemos dentro del parametro |
console.log(arr)

arr = arr.split('|') // corta el arr donde se especifique
console.log(arr);

arr.push('6'); // agregar elemento al final del arr
console.log(arr)

arr.unshift('0') // agregar elemento al inicio del array
console.log(arr)

console.log(arr.toString());

let eliminarItem = arr.pop() // eliminar el ultimo del array
console.log(eliminarItem)

console.log(arr)

arr.splice(0, 0, '10', '20', '30'); // stard inicio, parar, introducir 10, 20, 30 son 3 parametros q espera
console.log(arr)

arr = arr.slice( 0, 2 ); // 0 inicio, detener en 2 no lo corta solo el anterior

console.log(arr)



