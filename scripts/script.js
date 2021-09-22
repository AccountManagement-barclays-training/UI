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
    obj ={}
    var panno=document.querySelector("#pan").value;
    console.log(panno);
    obj.pan = panno;
    localStorage.setItem("myypan",panno);
    

  fetch('http://acm.mocklab.io/v1/checkpan', 
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
		window.location.replace("existingCustomer.html");
	}
    
})
.catch(error=>{window.location.replace("newCustomer.html");});
	
}
async function validateCus(event){
	console.log(event);
    event.preventDefault();
    obj ={}
    obj.username = document.querySelector("#cid").value;
    obj.password = document.querySelector("#password").value;
    console.log(obj);
    //console.log(JSON.stringify(obj));
   // var data = 

  fetch('http://acm.mocklab.io/cuslog', 
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
		window.location.replace("displayAccounts.html");
	}
})
.catch(error=>{window.alert("Invalid credentials!!"); 
    location.reload();});
	
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





