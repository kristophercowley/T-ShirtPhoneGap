var cart = {
	items: [],
	clear: function(){
		this.items = [];
	},
	addItem: function(item){
		this.items.push(item);
	}
}