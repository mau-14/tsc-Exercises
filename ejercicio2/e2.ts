class Rectangulo{

  public base: number
  public altura: number

  constructor(base: number, altura: number){
      this.base = base
      this.altura = altura
  }

  public area(): number{
    return this.base * this.altura
  }
}

const rectangulo = new Rectangulo(10,10)
const area = rectangulo.area()
console.log(area)


