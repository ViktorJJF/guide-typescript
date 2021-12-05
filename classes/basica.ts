(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {
      console.log("Constructor avenger llamado!!");
    }

    protected getFullName() {
      return `${this.name} (${this.realName})`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    getFullNameFromXmen() {
      console.log(super.getFullName());
    }

    get getIsMutant() {
      return this.isMutant;
    }
  }

  //   const antMan: Avenger = new Avenger("aea", "Capitan");
  const wolverine: Xmen = new Xmen("Wolverine", "Logan", true);
  console.log("cccccccccc", wolverine.getIsMutant);
  //   console.log("🚀 Aqui *** -> antMan", antMan.bio());
  //   console.log("aaa", Avenger.avgAge);
  //   console.log("bbbb", Avenger.getAvgAge());
})();
