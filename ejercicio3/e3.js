"use strict";
class Figura {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Rectangle extends Figura {
    area() {
        return this.base * this.altura;
    }
}
class Triangle extends Figura {
    area() {
        return (this.base * this.altura) / 2;
    }
}
