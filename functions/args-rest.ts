(() => {
  const fullname = (firstName: string, ...restArgs: Array<string>): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const superman = fullname("Clarck", "Joseph", "Kent");
  console.log({ superman });
})();
