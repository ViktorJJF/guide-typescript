"use strict";
var msg = "Hola mundo!";
var hero = {
    name: "ironman",
    age: 45
};
hero.age = 2;
console.log(hero);
var a = 10;
var b;
function sayHello(msg) {
    console.log("Hola que hace " + msg);
}
(function () {
    sayHello("Viktor");
})();
(function () {
    var numero = 10;
    console.log("🚀 Aqui *** -> numero", numero);
    if (numero > 0) {
        console.log(numero_1);
        var numero_1 = 10;
        console.log("🚀 Aqui *** -> numero", numero_1);
    }
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    },
};
var villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
var charles = {
    poder: "psiquico",
    estatura: 1.78,
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
console.log("🚀 Aqui *** -> apocalipsis", apocalipsis);
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var myFunc = function (welcomeMessage, name) {
        if (name === void 0) { name = "Name"; }
        return welcomeMessage + " " + name;
    };
    myFunc("Bienvenido");
})();
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
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activeBatiSignal = function () {
        return "Batiseñal activada";
    };
    console.log(typeof activeBatiSignal);
})();
(function () {
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
        getName: function () {
            return this.name;
        },
    };
    var superman = {
        name: "Clark kent",
        powers: ["Super fuerza"],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash.getName());
})();
(function () {
    var myCustomVariable = "Fernando";
    myCustomVariable = 20;
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: ["money"],
    };
})();
(function () {
    var avenger = 123;
    var power = "Fire";
    console.log(avenger.charAt(0));
    console.log(avenger.toFixed(2));
})();
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
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log('🚀 Aqui *** -> isSuperman', { isSuperman: isSuperman });
    isSuperman = isBatman ? true : false;
    console.log('🚀 Aqui *** -> isSuperman', isSuperman);
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 3] = "min";
        AudioLevel[AudioLevel["medium"] = 4] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(AudioLevel);
})();
(function () {
    var abc = function (message) {
        throw new Error(message);
    };
    abc("auxilio xd!");
    console.log("hola mundo!!");
})();
(function () {
    var isActive = undefined;
    console.log(isActive);
})();
(function () {
    var avengers = 15;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("estamos en problemas");
    }
    else {
        console.log("estamos salvados");
    }
    avengers = Number("132323");
    console.log("🚀 Aqui *** -> 123", { avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'And it\'s name is "Batman"';
    var linernaVerde = "Linstena Verde";
    var volcanNegro = "Heroe: ".concat(linernaVerde);
    console.log("holaa", ((_a = batman[100]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "No esta batman");
})();
(function () {
    var hero = ["Dr Strange", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero.push("aea");
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () { };
    var a = callBatman();
    console.log(a);
})();
(function () {
    var batman = "Bruce";
    var superman = "Clark";
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ["Lex Lutor", 5, true];
    var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    var fuerzaFlash = 5;
    var fuerzaSuperman = 100;
    var fuerzaBatman = 1;
    var fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=main.js.map