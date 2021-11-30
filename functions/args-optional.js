"use strict";
(function () {
    var myFunc = function (welcomeMessage, name) {
        if (name === void 0) { name = "Name"; }
        return welcomeMessage + " " + name;
    };
    myFunc("Bienvenido");
})();
