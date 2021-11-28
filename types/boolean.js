"use strict";
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log('🚀 Aqui *** -> isSuperman', { isSuperman: isSuperman });
    isSuperman = isBatman ? true : false;
    console.log('🚀 Aqui *** -> isSuperman', isSuperman);
})();
