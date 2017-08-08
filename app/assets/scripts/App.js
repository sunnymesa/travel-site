var $ = require ("jquery");
// var Person = require("./modules/Person"); /* this is node.js, use import below from es6 */
import Person from "./modules/Person";

class Adult extends Person {
  payTaxes() {
    console.log(this.name +  "owns taxes");
  }
}


// alert("ABCD");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();
