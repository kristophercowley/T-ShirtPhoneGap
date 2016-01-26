var members = [];
function register() {
	
	//gets input values
	var memberFirstNameElem = document.getElementById('firstName');
	var memberLastNameElem = document.getElementById('lastName');
	var memEmailE = document.getElementById('email');
	var memPassE = document.getElementById('password');
	
	//sets values to arg vars
	var memberFirstName = memberFirstNameElem.value;
	var memberLastName = memberLastNameElem.value;
	var memberEmail = memEmailE.value;
	var memberPassword = memPassE.value
	
	//validates form is filled out
	if (!memberFirstName && !memberLastName) {
		alert("Fill Out the Form!")
		return
	}
	
	//Creates Member
	var member = new Member(memberFirstName, memberLastName, memberEmail, memberPassword);
	
	//Pushes member to members array
	members.push(member);
	
	//Clear Form
	// memberFirstNameElem.value = "";
	// memberFirstNameElem.value = "";
	// memEmailE.value = "";
	// memPassE.value = "";
	
	//Show members on page
	var membersListElem = document.getElementById('members-list');
	membersListElem.innerHTML = "";
	for (var i = 0; i < members.length; i++) {
		var memFirstE = document.createElement('li');
		memFirstE.innerText = "First Name: " + members[i].firstName;
		membersListElem.appendChild(memFirstE);
		var memLastE = document.createElement('li');
		memLastE.innerText = "Last Name: " + members[i].lastName;
		membersListElem.appendChild(memLastE);
		var memEmailE = document.createElement('li');
		memEmailE.innerText = "Email: " + members[i].email;
		membersListElem.appendChild(memEmailE);
		var memPassE = document.createElement('li');
		memPassE.innerText = "Password: " + members[i].password;
		membersListElem.appendChild(memPassE)
	}
	console.log(members)
}

//For refactor...
// function clearForm() {
// 	register.memberNameElem.value = "";
// 	register.memEmailE.value = "";
// 	register.memPassE.value = "";
// }

function Member(firstName, lastName, email, password) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	//this.hasDiscount = false;
}

//Login Function
function login() {

}

//Designs and sizes arrays
//Will contain design objects on refactor
var designs = ["1", "Logo2", "Logo3", "Logo4", "Logo5", "Logo6", "Logo7", "Logo8", "Logo9", "Logo10"];
var sizes = ["s","m","l","xl","xxl","xxxl"]
var colors = ["White","Black","Blue","Red","Brown","Yellow","Green","Orange"]

//Gets id for designs and sizes dropdowns
var designsElem = document.getElementById('designsId');
var sizesElem = document.getElementById('sizesId');
var colorsElem = document.getElementById('colorsId');

//Populates the sizes dropdown
function popDrop(arr, elemId){
	var currentElem = elemId;
	for (var i = 0; i < arr.length; i++) {
		var current = arr[i];
		var newElem = document.createElement('option');
		newElem.textContent = current;
		newElem.value = current;
		currentElem.appendChild(newElem);
	}
}
//Initializes dropdown values
popDrop(sizes, sizesElem);
popDrop(designs, designsElem);
popDrop(colors, colorsElem);