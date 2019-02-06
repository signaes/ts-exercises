interface Brand {
  name: string;
}

class Car {
  protected age: number;
  constructor(public name: string, public brand: Brand) {
  }

  toString() {
    return `${this.brand.name} ${this.name}`
  }
}

const jeep: Brand = {
  name: 'Jeep'
};
const cherokee = new Car('Cherokee', jeep);

console.log(cherokee)
console.log(cherokee.toString())
