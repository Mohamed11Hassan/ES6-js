


/*
	const
	- block scope 
	- cant't be redcleared
	- cant't reassigned
	- ReferenceError when access before declearation
	- dosn't create properties in the window object   
*/

const SETTINGS = [];


// we can push
SETTINGS.push ('html', 'css' , 'js');

// we can not reassign
SETTINGS = ['html', 'css' , 'js'];

console.log(SETTINGS);


const SETTINGSOBJ = {
	'name' : 'ahmed',
	'age' : 25
}



// we can modify the object prop values

SETTINGSOBJ.name = ahmed;
SETTINGSOBJ.age = 26;


// we can not modifiy prop names 

SETTINGSOBJ = {
	'name' : 'ahmed',
	'age' : 25,
	'color' : 'red'	
}
