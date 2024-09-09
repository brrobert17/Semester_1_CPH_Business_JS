import {Car, Cat, Person} from "./Classes.js";

export const log = string => console.log('\x1b[32m%s\x1b[0m', string);
const writeFullName = (firstName, lastName) => log(`${firstName} ${lastName}`)
writeFullName('Robert', 'Bari');
const calculateRectangleArea = (a, b) => a*b
log(calculateRectangleArea(4, 8));
const calculateTravel = (speed, time) => speed * time
log(`You have travelled ${(calculateTravel(447.19, 0.125)).toFixed(2)} kms with the Königsegg`);

const robertCalculator = {
	writeFullName : writeFullName,
	calculateRectangleArea: calculateRectangleArea,
	calculateTravel: calculateTravel
}

robertCalculator.writeFullName('Roberto', 'Baggio');
log(robertCalculator.calculateRectangleArea(5, 9));
log(`You have travelled ${(calculateTravel(200.5, 0.125)).toFixed(2)} kms with the Jag`);

const person1 = new Person('Hans Henrik', 'fishing');
person1.greet();

const myArray = ['Laura', 'Matthias', 'Christine', 'Fredrik', 'Søren'];


const c1 = new Cat('Durmi', 'bastard', 'black');
c1.name = 'not durmi';

console.log(c1.getCat());
c1.setName('Cirmos');
console.log(c1.getCat());

const car1 = new Car('Subaru', 'Legacy Outback', '1999');
console.log(car1.getCarInfo());
car1.start();
console.log(car1.getCarInfo());
car1.stop();
console.log(car1.getCarInfo());

const car2 = new Car('Datsun', 'Patrol', '1994');
console.log(car2.getCarInfo());
car2.start();
console.log(car2.getCarInfo());
car2.stop();
console.log(car2.getCarInfo());

