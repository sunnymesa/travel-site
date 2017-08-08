class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favColor = favColor;
  }

  greet() {
    console.log("Hello, name: " + this.name + ", and color: " + this.favColor);
  }
}
// console.log("Hello, from person.js");

// module.exports = Person;

// module.exports = Person;
export default Person;



// exports.exampleProperty = "blah blah";
// exports.exampleFunction = function() {
//   alert("this is an example");
// }

