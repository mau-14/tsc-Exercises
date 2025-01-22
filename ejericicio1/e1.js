"use strict";
/* Crear una clase con una variable pública de cada tipo, un constructor e instanciar un objeto*/
class Ejercicio1 {
    constructor(palabra, numero, verdadero, nose, palabras) {
        this.palabra = palabra;
        this.numero = numero;
        this.verdadero = verdadero;
        this.nose = nose;
        this.palabras = palabras;
    }
}
const e1 = new Ejercicio1('hola', 10, true, 90, ['hola', 'adios']);
