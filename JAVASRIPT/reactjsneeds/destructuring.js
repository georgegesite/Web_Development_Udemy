

const cars = [
    {
      model: "Honda Civic",
      coloursByPopularity: ["black", "silver"],
      speedStats: {
        topSpeed: 140,
        zeroToSixty: 8.5




        
      }
    },
    {
      model: "Tesla Model 3",
      coloursByPopularity: ["red", "white"],
      speedStats: {
        topSpeed: 150,
        zeroToSixty: 3.2
      }
    }
];  

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

console.log(honda);
console.log(honda.model);
console.log(hondaTopSpeed);
console.log(hondaTopColour);