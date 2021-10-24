(() => {

    // Los valores opcionles deben de ir al final, Ts no puede inferir si el valor en el opcional o no
    const fullName = ( firstName:string, lastName?:string, upper: boolean = false): string =>{
        if (upper){
            return `${ firstName}, ${lastName || '----- '}`.toUpperCase();
        } else{
            return `${ firstName}, ${lastName || '----- '}`;
        }
    }

    // let noName: any; // Ts no valida el any

    const name = fullName( 'Tony', 'Stark', true );
    console.log({ name });
    

})()