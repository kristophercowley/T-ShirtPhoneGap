var images = jQuery('img');

var loginButton = jQuery('#loginButton');
var addToCartButton = jQuery('#addToCartButton');
loginButton.click(myAlert);

function myAlert(){
	//debugger;
	//loginButton.style.backgroundColor = "blue";
	grabItem()
	alert("You clicked login")
}

function grabItem(){
	loginButton.attr('class','btn-success')
}

function addToCart(){
	
}
//
addToCartButton.click(addToCart);
//
//loginButton.click(grabItem);

//Product Constructor or product to cart constrtuctor?
function Product(id,title,size,color,designId,price,url,quantity,inStock){
	//this.id = id,
	this.title = title,
	this.size = size,
	this.color = color,
	this.designId = designId,
	this.price = price,
	this.url = url,
	this.quantity = quantity,
	//this.inStock = function(){
	//	return this.quantity > 0;
	//},
	cart.push(this)
	//products.push(this)
}

