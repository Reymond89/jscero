
function Persona() {
    this.nombre= 'reymond',
    this.apellido= 'caceres',
    this.edad = 33

}
    Persona.prototype.imprimirNombres = function(){
        console.log( this.nombre + ' ' + this.apellido + ' ' + this.edad );
    }

let rey = new Persona();

console.log(rey.imprimirNombres());