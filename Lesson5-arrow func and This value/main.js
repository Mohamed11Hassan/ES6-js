/*
	
	Arrow function
	
*/


function Person() {

	// this back to object itself
	this.age = 0;

	setInterval(function () {

		// this back to function itself
		this.age++;

		console.log(this.age);


	}, 1000)

}


function Person() {

	// this back to object itself
	this.age = 0;

	setInterval( () => {

		// this  back to the prev this which back to object 
		this.age++;

		console.log(this.age);


	}, 1000)

}


let user = new Person();