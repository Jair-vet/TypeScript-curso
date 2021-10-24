(() => {

    let avengers:number = 10;

    console.log(avengers);
    
    const villians = 20;

    if( avengers < villians ){
        console.log('Tenemos Problemas');
    } else {
        console.log('Nos Salvamos');
    }

    avengers = 123;

    console.log( {avengers} );


})()