(() => {
    // Creado para poner reglas 
    type Heroe = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string;
    }

    let flash: Heroe =  {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }
    
    let superman: Heroe =  {
        name: 'Clark Kent',
        age: 77,
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    }



})()