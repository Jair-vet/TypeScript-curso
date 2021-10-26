(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log('Constructor Avenger llamado!');
        }

        protected getFullName(){
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string, 
            public isMutant: boolean
        ){
            super( name, realName );
            // console.log('Constructor Xmen llamado');
        }

        get fullName(){ // Método get
            return `${ this.name } - ${ this.realName }`
        }

        set fullName( name: string ){ // Método get
            // Aplicamos logica
            if( name.length < 3){ 
                throw new Error ('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }

        getFullNameDesdeXmen(){
            // console.log( super.getFullName() );
            
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    wolverine.fullName = 'Jair'
    // console.log( wolverine.fullName );
    
    // wolverine.getFullNameDesdeXmen();

})()