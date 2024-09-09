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
