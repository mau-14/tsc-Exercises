"use strict";
class Rombo {
    constructor(a, b) {
        this.diagonalVertical = a;
        this.diagonalHorizontal = b;
    }
    area() {
        return this.diagonalVertical * this.diagonalHorizontal;
    }
}
const rombo = new Rombo(10, 10);
console.log(rombo.area());
