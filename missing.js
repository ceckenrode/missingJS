String.prototype.capitalize = function() {
  var newString = "";
  for (var i = 0; i < this.length; i++) {
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

Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    if (!isNaN(Number(this[i]))) {
      sum += Number(this[i]);
    }
  }
  return sum;
};

Array.prototype.uniq = function() {
  var uniqArray = [];
  for (var i = 0; i < this.length; i++) {
    if (uniqArray.indexOf(this[i]) === -1) {
      uniqArray.push(this[i]);
    }
  }
  return uniqArray;
};

Array.prototype.remove = function(item) {
  var newArray = [];

  if (this.indexOf(item) === -1) {
    return this;
  } else {
    for (var i = 0; i < this.length; i++) {
      if (this[i] !== item) {
        newArray.push(this[i]);
      }
    }
  }
  return newArray;
};

function random(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

Array.prototype.take = function(x){
  return this.slice(0,x)
}

Object.prototype.keyAt = function(index){
  return Object.keys(this)[index];
}

Array.prototype.arrToObj = function(){
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    obj[i] = this[i]
  }
  return obj;
}
