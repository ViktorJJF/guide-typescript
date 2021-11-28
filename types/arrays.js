"use strict";
(function () {
    var numbers = [
        1,
        2,
        3,
        4,
        5,
        "6",
        7,
        8,
        9,
        10,
    ];
    numbers.push(true);
    var villians = ["Omega Rojo", "Dormammy", "Duende Verde"];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
