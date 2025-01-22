class Rombo{
  public diagonalVertical: number
  public diagonalHorizontal: number

  constructor(a:number,b:number){
    this.diagonalVertical = a
    this.diagonalHorizontal = b
  }

  public area(){
    return this.diagonalVertical * this.diagonalHorizontal
  }
}


const rombo = new Rombo(10,10)
console.log(rombo.area())
