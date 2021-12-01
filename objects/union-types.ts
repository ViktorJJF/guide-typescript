(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: Array<string>;
    getName?: () => string;
  };
  let myCustomVariable: string | number | Hero = "Fernando";

  myCustomVariable = 20;
  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: ["money"],
  };
})();
