"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Js',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.8898
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengerArr = ['cap. America', true, 12.443];
    const [cap, iron,] = avengerArr;
    console.log({ iron, cap });
})();
(() => {
    const nombre = 'Jair';
    const getName = () => {
        console.log('Viejo getName');
    };
})();
//# sourceMappingURL=main.js.map