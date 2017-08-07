function Person(fullName, favColor) {
    this.name = fullName;
    this.favColor = favColor;
    this.greet = function() {
        console.log("Hello, name: " + this.name + ", and color: " + favColor);
    }
}
// console.log("Hello, from person.js");

// module.exports = Person;

module.exports = Person;


// exports.exampleProperty = "blah blah";
// exports.exampleFunction = function() {
//   alert("this is an example");
// }

