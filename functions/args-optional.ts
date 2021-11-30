(() => {
  let myFunc = (welcomeMessage: string, name: string = "Name") => {
    return welcomeMessage + " " + name;
  };
  myFunc("Bienvenido");
})();
