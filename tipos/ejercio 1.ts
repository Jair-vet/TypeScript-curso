(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string,string] = [batman,superman];
    const villano: [string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    // ? enum { acuaman = 0 }
    enum fuerza{
      acuaman  = 0,
      batman   = 1,
      flash    = 5,
      superman = 100
    }
    const fuerzaAcuaman: fuerza = fuerza.acuaman;
    const fuerzaBatman: fuerza = fuerza.batman;
    const fuerzaFlash: fuerza = fuerza.flash;
    const fuerzaSuperman: fuerza = fuerza.superman;
    
    // Retorno de funciones 
    function activar_batiseñal():string {
      return 'activada';
    }
  
    function pedir_ayuda():void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  