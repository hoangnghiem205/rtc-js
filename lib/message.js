function Message(signal, to, content, parameters) {
	this.signal = signal;
	this.to = to;
	this.content = content;
	this.parameters = parameters;
};

Message.prototype.toString = function() {
	return JSON.stringify(this);
}