"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
;
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.tenants = [];
        this.door = false;
    }
    comeIn(name) {
        if (this.door)
            this.tenants.push(name);
    }
}
class MyHouse extends House {
    doorOpen(key) {
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
//# sourceMappingURL=task1.js.map