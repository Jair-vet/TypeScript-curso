// Crear interfaces
  interface Autos {
    encender: boolean;
    velocidadMaxima: number;
    acelear(): void;
  }


// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Autos ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Autos = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Guason{
  reir?:  boolean,
  comer?: boolean,
  llorar?:boolean
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGotica{
  (ciudadanos: string[]):number;
}

const ciudadGotica: CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Person {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string
  imprimirBio: () => void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {
  public constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string,
  ) {}

  imprimirBio(){
  }
}
const persona1 = new Persona('Juan',43,'Hombre','Soltero' );
console.log(persona1);

