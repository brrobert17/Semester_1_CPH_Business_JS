import {Person} from "./Classes/Person.js";
import {Cat} from "./Classes/Cat.js";
import {Car} from "./Classes/Car.js";

// EXERCISES: FUNCTIONS & OBJECTS
// ▪ Create a javascript function that takes firstname and lastname as 2 parameters and
// uses console.log() to output the person's name. Check that it works and is printet
// correctly.
// ▪ Create a function that calculates the area of a rectangle. The function should return
// the result. Test that it works.
// ▪ Create a function that takes speed and time as 2 parameters and calculates and
// returns the distance. Use the function to test that it works by using the 'log' again.
// 	Print out "You have travelled *x* km" where *x* is replaced by the result from the
// function.
// ▪ Create an object called calculator with the name of the owner (eg. Your name) and
// modify your code so the 3 previous functions are attached to the object.
// ▪ Adjust your code so that you can call the functions and test that they still work.
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
