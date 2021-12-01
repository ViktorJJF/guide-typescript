(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: Array<string>;
    getName: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
    getName() {
      return this.name;
    },
  };

  let superman: Hero = {
    name: "Clark kent",
    powers: ["Super fuerza"],
    getName() {
      return this.name;
    },
  };

  console.log(flash.getName());
})();
