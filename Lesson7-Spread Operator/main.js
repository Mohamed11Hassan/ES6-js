/*
	
	lesson[7] - Spread Operator ...
	
*/

/*==example 01==*/

let arrayOne = [1, 2, 3],
	arrayTwo = [4, 5];


// spread operator will clone and expand the arrayOne elements in customArr
let	customArr = [8, 9, ...arrayOne, 10, 65];


// spread operator will clone and expand the arrayOne and arrayTwo elements in allArrs
let allArrs = [...arrayOne, ...arrayTwo];



console.log(customArr);
console.log(allArrs);



/*==example 02==*/

let arr_1 = [1, 5, 10],
	arr_2 = [...arr_1];

arr_2.push(20);

console.log(arr_1);
console.log(arr_2);


/*==example 03==*/

let minVal = [5, 0, 30, 100, 500, -20, -1000];


// will give Nan because your passing array as a whole object not its values to compare them
console.log(Math.min(minVal));

// will give -1000 because your copy the values and compare them 
console.log(Math.min(...minVal));



