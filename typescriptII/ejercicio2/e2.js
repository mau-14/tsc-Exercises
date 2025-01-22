"use strict";
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
const rectangulo = new Rectangulo(10, 10);
const area = rectangulo.area();
console.log(area);
