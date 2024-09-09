import {log} from "./ex1.js";

export class Person {
    constructor(firstName, hobby) {
        this.firstName = firstName;
        this.hobby = hobby;
    }

    greet() {
        log(`Hello, my name is ${this.firstName} and I love ${this.hobby}`);
    }
}

export class Cat {

    #name;
    #breed;
    #color;
    constructor(name,  breed, color) {
        this.#name = name;
        this.#color = color;
        this.#breed = breed;
    }

    getCat() {
        return [this.#name, this.#breed, this.#color];
    }
    setName(name) {
        this.#name = name;
    }
}

export class Car {


    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = undefined;
    }

    getCarInfo() {
        return `The car is a ${this.year} ${this.make} ${this.model} and is its running status: ${this.isRunning}`;
    }

    start() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }
}
