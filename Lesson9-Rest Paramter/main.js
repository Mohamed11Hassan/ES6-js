/*
	
	lesson[9] - Rest Paramters
	
*/

/*==example 01==*/

let Sum = (x, y , ...z ) => {

	let total = 0;

	z.forEach(ele => {

		total += ele;

	});

		

	return x + y + total;
}

/*let Sum2 = (arrLength, ...z) => {

	arrLength = arrLength || 0;

	return arrLength === z.length ? 0 : z[arrLength] + Sum2(arrLength + 1, z);
}*/

/*==example 01==*/


console.log(Sum2(2, 5, 6, 7, 8));