console.log("Hello Bro Code");

//window  .alert("I really love pizza");

// this is a comment
/* this is a multi line comment */

/* Variable
1. Declaration (var, let , const)
2. Assignment (* assignment operator)
*/

let name = "George"; // string  
let age = 21; // number
let student = true; //booleans

//console.log(name);
//console.log(age);


if (student) // this conditions prints name becuase condition is true
{
    console.log("Hello",name);
}
else
console.log("You are ",age, " yrs old");

document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age + "yrs old";
document.getElementById("p3").innerHTML = "Enrolment Status: " + student; 

/* arithmetic expression is a combination off.
operands (values, variables, etc.)
operators (+ = * / %)
that can be evaluated to a value
ex. y = x + 5; 
*/

// augmented assignment operator i = i + 1 or i += 1
// operator precedence PEMDAS