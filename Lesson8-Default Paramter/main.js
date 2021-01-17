/*
	
	lesson[8] - Default Paramters
	
*/

/*==example 01==*/


// default parameters old way
function showMyInfo (username, role, theme) {

	// check if the variables value not passed to function with trinary oprator
	/*username = username === undefined ? "Default Name" :  username;
	role = role === undefined ? "Default role" :  role;
	theme = theme === undefined ? "Default Theme" :  theme;*/

	// check if the variables value not passed to function with truthy falsey way 
	username = username || "Default Name";
	role = role || "Default Role";
	theme = username || "Default Theme";

	return `<div>
	<h2>Hello ${username}</h2>	
		<h4>Your role is: ${role}</h4>
		<p>your website theme is: ${theme}</p>	
	</div>`;

}


document.getElementById('container').innerHTML += (showMyInfo('Mohamed', 'Admin'));


// default parameters new way
let showMyInfo2 =  (username = "Default Name", role = "Default Role", theme = "Default Theme") => {

	return `<div>
	<h2>Hello ${username}</h2>	
		<h4>Your role is: ${role}</h4>
		<p>your website theme is: ${theme}</p>	
	</div>`;

}

document.getElementById('container').innerHTML += (showMyInfo('Hassan', 'Normal User'));
