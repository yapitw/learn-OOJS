function HtmlElement() {
	this.click = function() {
		console.log('clicked');
	};
}

HtmlElement.prototype.focus = function() {
	console.log('focused');
};

function HtmlSelectElement(items) {
	this.items = items || [];
	this.addItem = function(item) {
		this.items.push(item);
	};
	this.removeItem = function(item) {
		const index = this.item.indexOf(item);
		this.item.splice(index, 1);
	};
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.constructor = HtmlSelectElement;
