//working with conditionals using ternary operators

let age = 10;
let name = "Pedro";

if(age >10)
{
    name = "Pedro";
} else{
    name = "Maria";
}

// use below more shorter line
let name2 = age > 10 ? "Pedro" : "Jack";

// ? if and : is else

//using ternary operators and arrow function together

const Component  = () => {
    return age > 10 ? <div> Pedro</div> : <div>Jack</div>;
}