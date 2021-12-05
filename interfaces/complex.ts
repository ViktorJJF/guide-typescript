(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Victor",
    age: 25,
    address: {
      id: 123,
      zip: "LYU SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address?.city;
    },
  };
  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "Toronto",
      id: 123,
      zip: "k2s u2d",
    },
    getFullAddress(id: string) {
      return this.address?.city;
    },
  };
})();
