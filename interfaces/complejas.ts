(() => {

    interface Client {
        name: string;
        age?: number;
        address : Address;
        getFullAdress( id: string ): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Carlos',
        age: 21,
        address: {
            id: 1233,
            zip: 'KTY-294',
            city: 'Ottawa',
        },
        getFullAdress(id:string){
            return this.address.city;
        }
    }
    
    const client2: Client = {
        name: 'Melissa',
        age: 43,
        address: {
            id: 1202,
            zip: 'JJH-982',
            city: 'Denver'
        },
        getFullAdress(id:string){
            return this.address.city;
        }
    }


})()