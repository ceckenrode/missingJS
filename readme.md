# MissingJS

MissingJS is a set of utility functions not available in JavaScript, though present in other scripting languages such Ruby or Python.

## String Methods

#### capitalize
Returns the string with the first letter of every word capitalized.

Example:

var sentence = "hello world".capitalize();

// sentence is equal to "Hello World"

#### b64Encode
Returns a Base 64 encoded version of the string the method is called on

Example:

var sentence = "hello world".b64Encode();

// sentence is equal to "aGVsbG8gd29ybGQ="

#### b64Decode
Returns a decoded version of a Base 64 encoded string the method is called on

Example:

var sentence = "aGVsbG8gd29ybGQ=".b64Decode();

// sentence is equal to "aGVsbG8gd29ybGQ="

## Array Methods

#### max
Returns the largest value found in an array

Example:

var largest = [1,2,3,4,5].max();

// largest is equal to 5

#### min
Returns the smallest value found in an array

Example:

var smallest = [-1,17,"bacon",0,-38].min();

// smallest is equal to -38

#### sum
Returns the sum of all numbers found in an array. Will type convert strings when possible

Example:

var sum = [1,2,3,"43","d", 2].sum()

// sum is equal to 51

#### uniq
Returns a new array with the unique values of the array the method is called on

Example:

var uniq = [1,2,3,"43","d",2,"d",1,"43"].uniq()

// uniq is equal to [1,2,3,"43","d"]

#### remove
Returns a new array with the selected element removed

Example:

var removed = [1,2,3,"43","d",2,"d",1,"43"].remove("43")

// removed is equal to [1,2,3,"d",2,"d",1]

#### random
Returns a whole random number within a specified range

Example:

var random = random(1,100)

//random is gives us a random number between 1 and 100 in this case. ie 87

#### clone
Clones an object or variable

Example:

obj2 = {
  key: "one"
}

var obj1 = clone(obj2)

obj1 == obj2
//returns true
obj1 === obj2
//returns false

obj1.key = 'two'


### Version
1.0.0

### Installation


### Plugins

### Development

### Todos
Add functionality for uniq to recognize uniq objects
Add option for multiple arguments in remove
Add option to remove all or specific number of occurrences of item in remove

License
----
