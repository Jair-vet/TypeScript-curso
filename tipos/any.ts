(() => {

    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    // console.log( avenger.charAt(0) );
    console.log( (avenger as string).charAt(0) ); // casteo en Ts
    
    avenger = 15.409399;
    console.log( avenger.toFixed(2) ); // Extraer solo 2 decimales
    console.log( (<number>avenger).toFixed(2) );  // Casteo en Ts
    
    console.log(exists);
    console.log(power);


})()