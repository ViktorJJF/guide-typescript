(() => {
  const numbers: (number | string | boolean)[] = [
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

  const villians = ["Omega Rojo", "Dormammy", "Duende Verde"];
  villians.forEach((v) => console.log(v.toUpperCase()));
})();
