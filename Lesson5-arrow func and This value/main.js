/*
	
	Arrow function
	
*/


let test = function () {

	let x = document.getElementById('show');

	x.innerHTML = this;

	console.log(this);

}

window.onload = test;

document.getElementById('show').addEventListener('click', test)