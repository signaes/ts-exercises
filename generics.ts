interface MapInterface<T> {
  items: {[key: string]: T};
  setItem(key: string, item: T): Map<T>;
  getItem(key: string): T;
  clear(): void;
  print(): void;
}

class Map<T> implements MapInterface<T> {
  public items = {};
  setItem(key: string, item: T) {
    this.items[key] = item;
    return this;
  }
  getItem(key: string) {
    return this.items[key];
  }
  clear() {
    this.items = {};
  }
  print() {
    console.log(JSON.stringify(this.items));
  }
}

const numbers = new Map<number>();
numbers.setItem('zero', 0)
  .setItem('one', 1)
  .setItem('two', 2)
  .print();

const numberStrings = new Map<string>();
numberStrings.setItem('zero', 'zero')
  .setItem('one', 'um')
  .setItem('two', 'dois')
  .print();
