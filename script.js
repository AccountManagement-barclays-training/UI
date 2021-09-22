// api url
const api_url =
"http://acm.mocklab.io/manager/logincred";
// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	console.log(response);
	// Storing data in form of JSON
	var data = await response.text();
    console.log(data);

	const myObj = JSON.parse(data);
	console.log(myObj);
    console.log(myObj.manager_cred[0].username);
	console.log(myObj.manager_cred[0].password);
	
    
	if (response) {
		hideloader();
	}
	//show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
