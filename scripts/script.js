function validate(event){
    console.log(event);
    event.preventDefault();
    obj ={}
    obj.username = document.querySelector("#username").value;
    obj.password = document.querySelector("#password").value;
    console.log(obj);
    //console.log(JSON.stringify(obj));
   // var data = 

  fetch('http://acm.mocklab.io/bleh', 
  {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
})
.then(resp=>resp.json())
.then(data => {
    
	console.log("Data");
    console.log(data);
	if(data.message=="success"){
		window.location.replace("managerhome.html");
	}
})
.catch(error=>{window.alert("Invalid credentials!!"); location.reload();});
}


async function checkPan(event){
	console.log(event);
    event.preventDefault();
	var pan=document.querySelector("#pan").value;
    if(pan.length !=10){
        alert("Enter valid Pan number!");
        location.reload();

    }
    else{
        console.log(pan);
	const response = await fetch('http://acm.mocklab.io/v1/checkpan');
	console.log(response);
	// Storing data in form of JSON
	var data =  await response.text();
    console.log(data);
	const myObj = JSON.parse(data);
	console.log(myObj);
	var flag=0;
	for(let i in myObj.existing){
		if (pan===myObj.existing[i]){
			flag=1;
		}	
	}

	if(flag===0){

		window.location.replace("newCustomer.html");
	}

	else{
		localStorage.setItem("myPan", pan);
		console.log("existingCustomer.html");
		window.location.replace("existingCustomer.html");
	}

	
    }
	
}

function addData(evt){
	obj = {}
    obj.name = document.querySelector("#name").value;
    obj.dob = document.querySelector("#dob").value;
    obj.pan = document.querySelector("#pan").value;
    obj.aadhar = document.querySelector("#aadhar").value;
	obj.address=document.querySelector("#address").value;
	obj.email = document.querySelector("#email").value;
    console.log(obj);
	console.log(JSON.stringify(obj));
    evt.preventDefault();

    fetch("http://acm.mocklab.io/v1/customers", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
		console.log(data.message);
        alert("Record Inserted Successfully"+  data);
        window.location.replace("existingCustomer.html");
    } );


}

function displayCus(event){
    console.log("Hello");
    console.log(event);
    event.preventDefault();
	var pan=localStorage.getItem("myPan");
    fetch("http://acm.mocklab.io/availablecus")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        /*let li = `<tr><th>Name</th><th>Email</th></tr>`;
        json.forEach(user => {
            li += `<tr>
                <td>${user.name} </td>
                <td>${user.email}</td>		
            </tr>`;
    });*/

document.getElementById("users").innerHTML = li;
});
}


