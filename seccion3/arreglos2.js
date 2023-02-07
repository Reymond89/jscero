
let arr = [

    true,
    {
        nombre: 'reymond',
        apellido: 'Caceres'
    },
    function(){
        console.log('viviendo dentro de un arreglo')
    },
    function(persona) {
        console.log(persona.nombre + ' ' + persona.apellido)
    },
    [
        'eva',
        'santi',
        'rey',
        'dama',
        [
            'pedro',
            'juan',
            'dilce',
            function(){
                console.log( this );
            }
        ]
    ]
]
console.log(arr)
console.log(arr[0])
console.log(arr[1].nombre + ' ' + arr[1].apellido);
arr[2]();
arr[3]( arr[1] );
console.log(arr[4][4][0]);


let arreglo2 = arr[4][4];
arreglo2[1] = 'julieta';
console.log(arreglo2)
console.log(arr)
arreglo2[3]();

