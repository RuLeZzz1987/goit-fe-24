// хочется наконецто разобраться на данном примере.

const Singleton = (function() {
    const add = (accum, element) => accum + element;
    const mult = (accum, element) => accum * element;
    const sub = (accum, element) => accum - element;

    function reduceArray(array, cb, initial) {
        'use strict';
        let i;
        let accum;
        if (arguments.length >= 3) {
            accum = initial;
            i = 0;
        }
        if (arguments.length === 2) {
            accum = array[0];
            i = 1;
        }
        for (i; i < array.length; i += 1) {
            const element = array[i];
            // Write code under this line
            accum = cb(accum, element);
        }
        return accum;
    }

    const arr = [1, 2, 3, 4, 5];
    console.log(reduceArray(arr, add)); // 15
    console.log(reduceArray(arr, add, 10)); // 25
    console.log(reduceArray(arr, mult)); // 120
    console.log(reduceArray(arr, mult, 10)); // 1200
    console.log(reduceArray(arr, sub)); // -13
    console.log(reduceArray(arr, sub, 10)); // -5
    return {arr};
})()