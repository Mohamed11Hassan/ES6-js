/*
	
	Template literals [template strings]
	
*/


const GENDER = "Male";



/*==exampel 01==*/

// old way

let oldWay = "hello it is me" +   (GENDER === "Male" ? " Mr " : " Mrs " ) + "Mohamed Hassan \n" +

"Iam : " + GENDER + "\n" +

"Iam from Egypt \n" + 

"I am Node.js developer";


console.log(oldWay); 

console.log("\n");


// new way

let newWay = `hello it is me${GENDER === "Male" ? " Mr " : " Mrs "}Mohamed Hassan
I am : ${GENDER}
Iam from Egypt
I am Node.js developer`;

console.log(newWay);



/*==exampel 02==*/

let username = "Mans",
	
	age = 15;

// old way 
const MARKUP_OLD_WAY = '<div class = "card">\n' +
'\t<h2 class="name">' + username + '</h2>\n' + 
'\t<span class="age">'+  age  + '</span>\n' + 
'</div>'

console.log(MARKUP_OLD_WAY);


// new way
const MARKUP_NEW_WAY = `
<div class = "card">
	<h2 class="name">${username}</h2>
	<span class="age">${age}</span>
</div>`;  

console.log(MARKUP_NEW_WAY);



