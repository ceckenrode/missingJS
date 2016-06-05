String.prototype.capitalize = function() {
		var newString = "";
		for (var i; i < this.length; i++) {
    	if (i === 0 || this.charAt(i-1) === " "){
				newString += this.charAt(i).toUpperCase();
			} else {
      	newString += this.charAt(i);
			}
		}
		return newString;
};
