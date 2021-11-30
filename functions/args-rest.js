"use strict";
(function () {
    var fullname = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(" "));
    };
    var superman = fullname("Clarck", "Joseph", "Kent");
    console.log({ superman: superman });
})();
