"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 77,
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: 'Carlos',
        age: 21,
        address: {
            id: 1233,
            zip: 'KTY-294',
            city: 'Ottawa',
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 43,
        address: {
            id: 1202,
            zip: 'JJH-982',
            city: 'Denver'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map