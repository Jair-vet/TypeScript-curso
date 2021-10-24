(() => {

    const addNumbers = ( a: number, b: number ) =>  a + b;
    const greet = ( name: string ) =>  `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado!`;
    
    // let myFunction: Function;
    // let myFunction: (y:number, z:number) => number;
    let myFunction: () => string;

    //* myFunction = 10;
    //* console.log(myFunction);

    // myFunction = addNumbers;
    // console.log( myFunction(1,4) );
   
    //? myFunction = greet;
    //? console.log( myFunction('Jair') );
    
    myFunction = saveTheWorld;
    console.log( myFunction() );
    
    




})()