/* Crear una clase con una variable pública de cada tipo, un constructor e instanciar un objeto*/ 
class Ejercicio1 {

  public palabra: string
  public numero: number
  public verdadero: boolean
  public nose: any
  public palabras: string[]

  constructor(palabra: string,numero: number, verdadero: boolean, nose: any, palabras: string[]){
    this.palabra = palabra
    this.numero = numero
    this.verdadero = verdadero
    this.nose = nose
    this.palabras = palabras
  }
}


const e1 = new Ejercicio1('hola',10,true,90,['hola','adios'])
