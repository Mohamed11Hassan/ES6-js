/*
	
	Arrow function
	
*/


//regular function with no pamater

let regularTestOne = function () {

	return "regular function";
}

let regularTestTwo = function (age) {

	return  "your age in days: " + (age * 365) + " days";
}

let regularTestThree = function (x , y) {

	return  x * y;
}

// arrow function with one statement
let arrowTestOne = () => "arrow function single statement";

// arrow function with one statement and no paramater
let arrowTestTwo = _ => "arrow function single statement no paramater";



// arrow function with one parameter with or without brackets
let arrowTestThree = (age) => "your age in days: " + (age * 365) + " days";
let arrowTestFour = (age) => "your age in days: " + (age * 365) + " days";

// arrow function with multipile parameters

let arrowTestFive = (x, y) => x * y ;

console.log(regularTestOne());
console.log(regularTestTwo(24));
console.log(regularTestThree(5, 4));
console.log(arrowTestOne());
console.log(arrowTestTwo());
console.log(arrowTestThree(24));
console.log(arrowTestFour(24));
console.log(arrowTestFive(5 , 4));