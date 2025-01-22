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
const rectangulo = new Rectangle(10, 10);
console.log(rectangulo.area());
const triangulo = new Triangle(10, 10);
console.log(triangulo.area());
