String.prototype.capitalize = function() {
  var newString = "";
  for (var i; i < this.length; i++) {
    if (i === 0 || this.charAt(i - 1) === " ") {
      newString += this.charAt(i).toUpperCase();
    } else {
      newString += this.charAt(i);
    }
  }
  return newString;
};

String.prototype.b64Encode = function() {
  return btoa(encodeURIComponent(this).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
};

String.prototype.b64Decode = function() {
  return decodeURIComponent(Array.prototype.map.call(atob(this), function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
};

Array.prototype.max = function() {
  var max = -Infinity;
  for (var i = 0; i < this.length; i++) {
    if (typeof this[i] === "number" && this[i] > max) {
      max = this[i];
    }
  }
  return max;
};

Array.prototype.min = function() {
  var min = Infinity;
  for (var i = 0; i < this.length; i++) {
    if (typeof this[i] === "number" && this[i] < min) {
      min = this[i];
    }
  }
  return min;
};
