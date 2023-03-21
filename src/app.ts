// const button = document.querySelector("button")!;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

class Key {
  private signature: number;
  constructor () {
    this.signature = Math.random();
  }
  getSignature (): number {
    return this.signature
  }
};

class Person {
  constructor (private key: Key) {}
  getKey (): Key {
    return this.key;
  }
}
abstract class House {
  private tenants: Person[] = [];
  protected door = false;

  constructor (protected key: Key) {}

  comeIn (name: Person): void {
    if (this.door) this.tenants.push(name)
  }

  abstract doorOpen (key: Key): boolean 
}

class MyHouse extends House {
  doorOpen(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      console.log('Wrong key');
    }
    console.log('Open');
    return this.door = true;
  }
}

const key = new Key;
const person = new Person(key);
const house = new MyHouse(key);

house.doorOpen(person.getKey());
house.comeIn(person);