// Variables

let nameLet = "syed";
const nameConst = "syed";
var nameVar = "syed";

// console.log(nameLet);

// Data Types
let types = [
  "string",
  "number",
  "array",
  "boolean",
  "object",
  "undefind",
  "null",
  "sumbol",
];

// 3 coercion (string, number, boolean)

// string "5" + 9 , "result : " + true
// number "10" - 2 , true become 1, false become 0

// Operators +,-,/,*,++,--,%,**  =,+=,-=,/=,*=  ==,===,!=,!==,<,>  &&,||,!

// functions  (Core syntaxL Dec & Invo, function expressions (anonymous function), Arrow function, IIFE)

// scope (Global, module, function & block)

// closure

// hoisting

// objects

// arrays

let task = ["clean", "cook"];
task.push("code");
console.log(task);
task.pop();

console.log(task);

// create another array using map
let anotherTask = task.map((num) => num + " test");
console.log(anotherTask);

// filter array
let filteredTask = task.filter((str) => str == "cook");
console.log(filteredTask);

// flat map to get the nested array
