var images = jQuery('img');

var loginButton = jQuery('#loginButton');

loginButton.click(myAlert);

function myAlert(){
	//debugger;
	//loginButton.style.backgroundColor = "blue";
	alert("You clicked login")
}

function grabItem(){
	
}

loginButton.click(grabItem);

//Product Constructor
function Product(title,price,url,quantity,inStock){
	this.title = title;
	this.price = price;
	this.url = url;
	this.quantity = quantity;
	this.inStock = function(){
		return this.quantity > 0;
	}
}

