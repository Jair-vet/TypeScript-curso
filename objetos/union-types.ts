(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string;
    }

    let myCustomVariable: ( string | number | Hero) = 'Jair';
    console.log( typeof myCustomVariable );
    
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    
    myCustomVariable = {  // Un Onjeto por las {}
        name: 'Juana',
        age: 22,
        powers: [1]
    }
    console.log(typeof myCustomVariable);
    


})()