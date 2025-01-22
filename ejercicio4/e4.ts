class Villano{
  public nombre: string
  public edad?: number
  public arma: string

  constructor(nombre: string, edad?: number, arma: string = 'pistola'){
      this.nombre = nombre
      this.edad = edad 
      this.arma = arma
  }

  public getVillano(): string{
    let mensaje
    if(this.edad){
      mensaje = this.nombre + ' tiene '+this.edad+' años y su arma es: '+this.arma
    }else{
      mensaje = this.nombre+' tiene esta arma: '+this.arma
    }
    return mensaje
  }
}


const villano = new Villano('paquito')
console.log(villano.getVillano())

const villano2 = new Villano('manueh',20,'zambomba')
console.log(villano2.getVillano())


