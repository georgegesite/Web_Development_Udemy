const person ={
    name: "Pedro",
    age: 20,
    isMarried: false,
};

/*const name = person.name;
const age = person.age;
const isMarried = person.isMarried;*/

//don't use above, use below instead

const {name, age, isMarried} = person;

const person2 = {...person, name: "Jack"};

// below uses objects but in arrays

const names = ["Pedro","JAck","Jessica"];
const anmes2 =[...names, "JOel"];
//JOel is addes to the array names but in a diffrent array