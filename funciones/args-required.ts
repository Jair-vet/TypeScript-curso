(() => {

    const fullName = ( firstName:string, lastName:string): string =>{
        return `${ firstName}, ${lastName }`;
    }

    // let noName: any; // Ts no valida el any

    const name = fullName( 'Tony', 'Stark');
    console.log({ name });
    

})()