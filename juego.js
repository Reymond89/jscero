
function Jugador(nombre) {

    this.nombre = nombre;
    this.hp = 100;
    this.mp = 100;

    this.curar = function(curarJugador){

        if (this.mp >= 40){
            this.mp -= 40;
            curarJugador.hp += 20;
        }else{
            console.info(this.nombre + ' ' + 'no tiene Mana suficiente!!');
        }
    }

}

let gandalf = new Jugador('Gandalf');
let Legolas = new Jugador('Legolas');
console.log(gandalf);
console.log(Legolas);

gandalf.curar(Legolas);

console.log(gandalf);
console.log(Legolas);

gandalf.curar(Legolas);

console.log(gandalf);
console.log(Legolas);


gandalf.curar(Legolas);

console.log(gandalf);
console.log(Legolas);

