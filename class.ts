interface Brand {
  name: string;
}

class Vehicle {
  wheels: number;
  protected age: number = 0;
}

class Car extends Vehicle {
  wheels = 4;

  constructor(public name: string, public brand: Brand) {
    super();
  }

  toString() {
    return `${this.brand.name} ${this.name}`
  }

  incrementAge() {
    this.age += 1;
  }
}

const jeep: Brand = {
  name: 'Jeep'
};
const cherokee = new Car('Cherokee', jeep);

console.log(cherokee)
console.log(cherokee.toString())

cherokee.incrementAge();
console.log(cherokee)

class Animal {
  protected speaks: boolean = false;
}

class Human extends Animal {
  private birthPlace: string;
  speaks = true;

  set origin(value: string) {
    this.birthPlace = value;
  }

  get origin() {
    return this.birthPlace;
  }
}

const h = new Human()
h.origin = 'Earth'

console.log(h.origin)
