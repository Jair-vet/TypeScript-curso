(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ):string => {
        return `${ firstName } ${ restArgs.join(' ') }` // Joi => unir
    }


    const superman = fullName( 'Clark','Joseph','Kent' );

    console.log({superman});
    


})()