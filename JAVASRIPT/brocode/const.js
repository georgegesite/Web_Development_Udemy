// const - variable the cannot be changed
// Circumference = 2 pi radius

const PI = 3.1416
let radius;
let Circumference;

radius = window.prompt("what is the radius of the circle?");
radius = Number(radius);

Circumference = 2 * PI * radius;
console.log("The circumference of the circle is ",Circumference);