// Lesson 131 about Arrays

var eggs =["White", "Black", "Brown", "Violet"];
// console.log(eggs.length);
// console.log(eggs[0]);\

var Egg = prompt("Enter egg color");

if (eggs.includes(Egg)){ //includes checks string in the array
    alert("Welcome");

}
else{
    alert("GTFO");
}