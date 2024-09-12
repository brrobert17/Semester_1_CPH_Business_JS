import {Person} from "./Classes/Person.js";
import {Cat} from "./Classes/Cat.js";
import {Car} from "./Classes/Car.js";
import {log} from "../../utils.js";
import {Student} from "./Classes/Student.js";

// EXERCISES: FUNCTIONS & OBJECTS
// ▪ Create a javascript function that takes firstname and lastname as 2 parameters and
// uses log() to output the person's name. Check that it works and is printet
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

// EXERCISE CLASS
// ▪ Create a Cat class with name, color, breed.
// 	▪ Create a constructor that takes 3 parameters to create an object with name, color,
// 	breed.
// 	▪ Create a function/method that returns the cat's data.
// ▪ Create a function that can change the cat's name.
const c1 = new Cat('Durmi', 'bastard', 'black');
//test private field
c1.name = 'not durmi';
log(c1.getCat());
c1.setName('Cirmos');
log(c1.getCat());

// EXERCISE CAR
// ▪ Define the Car class:
// ▪ Create a class named Car.
// ▪ Add a constructor that accepts make, model, and year as parameters and initializes these
// properties.
// ▪ Add Methods:
// 	▪ getCarInfo method: This method should return a string containing the car's make, model, and
// year.
// ▪ start method: This method should set a property called isRunning to true and return a
// string indicating the car has started.
// ▪ stop method: This method should set the isRunning property to false and return a string
// indicating the car has stopped.
// ▪ Create Instances and Test Methods:
// 	▪ Create two instances of the Car class with different make, model, and year values.
// ▪ Call the getCarInfo, start, and stop methods on these instances and print the results to verify
// that everything works as expected.
const car1 = new Car('Subaru', 'Legacy Outback', '1999');
log(car1.getCarInfo());
car1.start();
log(car1.getCarInfo());
car1.stop();
log(car1.getCarInfo());

const car2 = new Car('Datsun', 'Patrol', '1994');
log(car2.getCarInfo());
car2.start();
log(car2.getCarInfo());
car2.stop();
log(car2.getCarInfo());

// EXERCISE: ARRAYS

// ▪ Create an array with 5 names. Print out the first element (name) using console.log()
const myArray = ['Laura', 'Matthias', 'Christine', 'Fredrik', 'Søren'];
const [firstElement] = myArray;
log(firstElement);
// ▪ Use the indexOf function to get the index of a name that exists in your array.
log(myArray.indexOf('Christine'));
// ▪ Try the indexOf function with a name that does not exist. What is returned?
log(myArray.indexOf('Christina'));
// ▪ Use the push function to add a new name to the array of names, so you have 6
myArray.push('Daniel');
// names in the array. 'log' the array to verify.
log(myArray.length);
// ▪ Use the slice function on the array, to create a new array with the first 3 names. 'log'
// the array to verify.
const newArr = myArray.slice(0,3);
log(newArr);
// ▪ Create 2 objects with firstname, lastname, email – values. Add the two objects to a
// new array. 'log' the array to verify. Also 'log' the first objects' email in a separate
// 'log'.
const obj1 = {
	firstName: "Rob",
	lastName: "Schneider",
	email: "rob@gmail.com",
}
const obj2 = {
	firstName: "Tim",
	lastName: "Burton",
	email: "tim@gmail.com",
}
const newArr2 = [obj1, obj2];
for (const obj of newArr2) {
	for (const [key, value] of Object.entries(obj)) {
		log(`${key}: ${value}`);
	}
}
log(newArr2[0].email);

// EXERCISE ARRAYS & OBJECTS
// ▪ Exercise: Student Grades Management
// ▪ Create a Student Object:
const s1 = new Student('Sam', 1, [7,10]);
console.log('OG student: ' + JSON.stringify(s1));
// 	▪ Define a Student object with properties: name, id, and grades (an array of numbers).

// ▪ Add Grades:
// 	▪ Write a function named addGrade that takes a Student object and a grade (number) as
// parameters, and adds the grade to the student's grades array.
s1.addGrades(12);
s1.addGrades(12);
// ▪ Update Student Name:
// 	▪ Write a function named updateStudentName that takes a Student object and a new name as
// parameters and updates the student's name.
s1.setName('Samson');
// ▪ Test the Functions:
// 	▪ Create a student object.
// ▪ Add a few grades to the student.
// ▪ Update the student's name and print the updated object.
console.log('NEW student: ' + JSON.stringify(s1));

