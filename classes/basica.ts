(() => {

    class Avenger {

        // private name: string = 'No name';
        // private team: string = 'No team';
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name // El nombre de la clase
        }

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string, 
            avgAge: number = 36,

        ){}

        public bio(){  // Asi creamos un Método
            return `${ this.name } (${ this.team })`
        }

    }

    const antman: Avenger = new Avenger('Ant-man', 'Capitan', 'Scott Lang');
    console.log( antman );
    console.log( Avenger.avgAge );
    
    // console.log( antman.bio() );
    console.log( Avenger.getAvgAge() );

    


})()