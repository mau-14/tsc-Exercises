class Figura{
  public base: number
  public altura: number

  constructor(base: number, altura: number){
    this.base = base
    this.altura = altura
  }
}


class Rectangle extends Figura {

  public area(): number{
    return this.base * this.altura
  }
}

class Triangle extends Figura {

  public area(): number{
    return (this.base * this.altura) / 2
  }
}

