"use strict";
class Villano {
    constructor(nombre, edad, arma = 'pistola') {
        this.nombre = nombre;
        this.edad = edad;
        this.arma = arma;
    }
    getVillano() {
        let mensaje;
        if (this.edad) {
            mensaje = this.nombre + ' tiene ' + this.edad + ' años y su arma es: ' + this.arma;
        }
        else {
            mensaje = this.nombre + ' tiene esta arma: ' + this.arma;
        }
        return mensaje;
    }
}
const villano = new Villano('paquito');
console.log(villano.getVillano());
const villano2 = new Villano('manueh', 20, 'zambomba');
console.log(villano2.getVillano());
