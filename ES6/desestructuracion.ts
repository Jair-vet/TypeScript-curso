(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Js',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.8898
    }

    // const { poder, vision} = avengers    
    // console.log( poder.toFixed(3), vision.toUpperCase() );

    const printAvenger = ( { ironman, ...resto }:Avengers ) => {
        console.log( ironman, resto ); 
    } 

    // printAvenger( avengers);
    

})()