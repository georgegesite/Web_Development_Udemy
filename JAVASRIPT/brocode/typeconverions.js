// Type conversion = change the datatype of a value of another
//                  (strings, numbers, booleans)


// let age = window.prompt("How old are you");

// age = Number(age);
// age+=1;

// console.log("HAppy birthday! you are ", age, "yrs old");

let x;
let y;
let z;

x = Number("3.14");
console.log(x, typeof x);
y = String(x);
console.log(y, typeof y);
z = Boolean(""); // if empty string, boolean = false, if not empty, boolean will be true
console.log(z, typeof z);