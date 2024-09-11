import {log} from "../../../utils.js";

export class Person {
    constructor(firstName, hobby) {
        this.firstName = firstName;
        this.hobby = hobby;
    }

    greet() {
        log(`Hello, my name is ${this.firstName} and I love ${this.hobby}`);
    }
}