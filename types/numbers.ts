(() => {
  let avengers: number = 15;

  console.log(avengers);
  const villians: number = 20;

  if (avengers < villians) {
    console.log("estamos en problemas");
  } else {
    console.log("estamos salvados");
  }

  avengers = Number("132323");
  console.log("🚀 Aqui *** -> 123", { avengers });
})();
