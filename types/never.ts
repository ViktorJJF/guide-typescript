(() => {
  const abc = (message: string): never => {
    throw new Error(message);
  };

  abc("auxilio xd!");
  console.log("hola mundo!!");
})();
